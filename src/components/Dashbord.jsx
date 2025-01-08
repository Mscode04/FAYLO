import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "chart.js/auto";
import "../App.css";

const Dashbordt = () => {
    const [followersFile, setFollowersFile] = useState(null);
    const [followingFile, setFollowingFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [showGraphs, setShowGraphs] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerPage] = useState(10);

    // Refs for the charts
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);

    // Handle folder upload
    const handleFolderUpload = (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) {
            alert("Please upload a valid folder containing the required files.");
            return;
        }

        let followersFile = null;
        let followingFile = null;

        // Identify required files by name
        files.forEach((file) => {
            if (file.name.includes("followers_1.html")) {
                followersFile = file;
            } else if (file.name.includes("following.html")) {
                followingFile = file;
            }
        });

        if (!followersFile || !followingFile) {
            alert("Required files not found in the uploaded folder.");
            return;
        }

        setFollowersFile(followersFile);
        setFollowingFile(followingFile);
        alert("Files uploaded successfully. You can now analyze the data.");
    };

// Analyze Instagram data
const analyzeInstagramData = () => {
    if (!followersFile || !followingFile) {
        alert("Please upload a valid folder first.");
        return;
    }

    const extractData = (file, callback) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target.result;
            const regex = /instagram\.com\/([a-zA-Z0-9._-]+)/g;
            let match;
            const usernames = [];
            while ((match = regex.exec(content)) !== null) {
                usernames.push(match[1]);
            }
            callback(usernames);
        };
        reader.onerror = () => {
            alert("Error reading file. Please try again.");
        };
        reader.readAsText(file);
    };

    extractData(followersFile, (followers) => {
        extractData(followingFile, (following) => {
            const notFollowingBack = following.filter(
                (user) => !followers.includes(user)
            );
            const mutualConnections = following.filter((user) =>
                followers.includes(user)
            );

            const analysis = {
                totalFollowers: followers.length,
                totalFollowing: following.length,
                notFollowingBack,
                mutualConnections,
            };

            // Save the analysis result to state
            setAnalysisResult(analysis);

            // Save the analysis result to localStorage
            localStorage.setItem("instagramAnalysis", JSON.stringify(analysis));

            alert("Analysis completed and saved locally!");
        });
    });
};


    // Display pie chart
    const displayPieGraph = (followers, following, notFollowingBack, mutualConnections) => {
        const ctx = pieChartRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["Followers", "Following", "Not Following Back", "Mutual Connections"],
                    datasets: [{
                        data: [followers, following, notFollowingBack, mutualConnections],
                        backgroundColor: ["#914e75", "#2196f3", "#f44336", "#ffeb3b"],
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                color: "white",
                            },
                        },
                    },
                },
            });
        }
    };

    // Display line chart
    const displayLineGraph = (followers, following, notFollowingBack, mutualConnections) => {
        const ctx = lineChartRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Followers", "Following", "Not Following Back", "Mutual Connections"],
                    datasets: [
                        {
                            label: "Instagram Data Analysis",
                            data: [followers, following, notFollowingBack, mutualConnections],
                            borderColor: "#FF4450",
                            backgroundColor: "rgba(255, 23, 2, 0.72)",
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: "white",
                            pointBorderColor: "white",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { ticks: { color: "white" } },
                        y: { beginAtZero: true, ticks: { color: "white" } },
                    },
                    plugins: {
                        legend: { labels: { color: "white" } },
                        tooltip: {
                            callbacks: {
                                label: (tooltipItem) => ` ${tooltipItem.label}: ${tooltipItem.raw}`,
                                title: () => '',
                            },
                            titleColor: "white",
                            bodyColor: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                        },
                    },
                },
            });
        }
    };

    // Handle "Show Graph" button
    const handleShowGraph = () => {
        if (analysisResult) {
            const { totalFollowers, totalFollowing, notFollowingBack, mutualConnections } = analysisResult;
            displayPieGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
            displayLineGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
        }
        setShowGraphs(true);
    };

    // Get profiles for the current page
    const getCurrentPageProfiles = () => {
        if (analysisResult && analysisResult.notFollowingBack) {
            const { notFollowingBack } = analysisResult;
            const indexOfLastProfile = currentPage * profilesPerPage;
            const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
            return notFollowingBack.slice(indexOfFirstProfile, indexOfLastProfile);
        }
        return [];
    };

    // Pagination controls
    const totalPages = Math.ceil(analysisResult?.notFollowingBack.length / profilesPerPage);
    const handlePrevPage = () => setCurrentPage(currentPage - 1);
    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        if (showGraphs && analysisResult) {
            const { totalFollowers, totalFollowing, notFollowingBack, mutualConnections } = analysisResult;
            displayPieGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
            displayLineGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
        }
    }, [showGraphs, analysisResult]);

    return (
        <div className="div">    
            <div className="main-content">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 box-two">
                            <div className="head-box">
                                <label htmlFor="folderUpload" className="form-label">Upload Folder</label>
                                <input
                                    type="file"
                                    id="folderUpload"
                                    className="form-control"
                                    webkitdirectory="true"
                                    directory="true"
                                    multiple
                                    onChange={handleFolderUpload}
                                />
                                <button className="btn btn-info w-100 mt-3" onClick={analyzeInstagramData}>
                                    Analyze
                                </button>
                            </div>
                            {analysisResult && (
                                <div id="result" className="mt-4">
                                    <table className="table table-striped table-bordered">
                                        <tbody>
                                            <tr><th>Total Followers</th><td>{analysisResult.totalFollowers}</td></tr>
                                            <tr><th>Total Following</th><td>{analysisResult.totalFollowing}</td></tr>
                                            <tr><th>Not Following Back</th><td>{analysisResult.notFollowingBack.length}</td></tr>
                                            <tr><th>Mutual Connections</th><td>{analysisResult.mutualConnections.length}</td></tr>
                                        </tbody>
                                    </table>
                                    {!showGraphs && (
                                        <button className="btn btn-success w-100 mt-3" onClick={handleShowGraph}>
                                            Show Graph
                                        </button>
                                    )}
                                    {showGraphs && (
                                        <div className="mt-4 row">
                                            <div className="col-md-6"><canvas ref={pieChartRef}></canvas></div>
                                            <div className="col-md-6"><canvas ref={lineChartRef}></canvas></div>
                                        </div>
                                    )}
                                    {analysisResult.notFollowingBack.length > 0 && (
                                        <div className="mt-4 profile-card">
                                            <h4>People Not Following Back:</h4>
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                                {getCurrentPageProfiles().map((username, index) => (
                                                    <div className="col mb-4 bgx" key={index}>
                                                        <div className="card shadow-sm bgy">
                                                            <div className="card-body profile-card-bg">
                                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                                    {/* Profile Name */}
                                                                    <div className="text-pro">
                                                                        <strong>{username}</strong>
                                                                    </div>
                                                                    {/* View Profile Button */}
                                                                    <div>
                                                                        <a
                                                                            href={`https://www.instagram.com/${username}`}
                                                                            className="btn btn-pro btn-primary btn-sm mt-2"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            style={{ padding: "4px" }}
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Pagination Controls */}
                                            <div className="d-flex justify-content-center mt-4">
                                                {currentPage > 1 && (
                                                    <button
                                                        className="btn btn-secondary mx-2"
                                                        onClick={handlePrevPage}
                                                    >
                                                        Previous
                                                    </button>
                                                )}
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                    <button
                                                        key={page}
                                                        className={`btn btn-secondary mx-2 ${currentPage === page ? "active" : ""}`}
                                                        onClick={() => paginate(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                ))}
                                                {currentPage < totalPages && (
                                                    <button
                                                        className="btn btn-secondary mx-2"
                                                        onClick={handleNextPage}
                                                    >
                                                        Next
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbordt;
