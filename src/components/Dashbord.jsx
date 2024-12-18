import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "chart.js/auto"; // Import Chart.js
import '../App.css';

const Dashbordt = () => {
    const [followersFile, setFollowersFile] = useState(null);
    const [followingFile, setFollowingFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [showGraphs, setShowGraphs] = useState(false); // State to control graph visibility
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const [profilesPerPage] = useState(10); // Number of profiles to display per page

    // Refs for the canvas elements
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);

    // Function to extract usernames from the uploaded file
    const extractUsernamesFromFile = (file, callback) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            const content = event.target.result;
            const regex = /instagram\.com\/([a-zA-Z0-9._-]+)/g;
            let match;
            const usernames = [];
            while ((match = regex.exec(content)) !== null) {
                usernames.push(match[1]);
            }
            callback(usernames);
        };
        reader.onerror = function () {
            alert("Error reading file. Please try again.");
        };
        reader.readAsText(file);
    };

    // Function to analyze the data
    const analyzeInstagramData = () => {
        if (!followersFile || !followingFile) {
            alert("Please upload both Followers and Following files.");
            return;
        }

        extractUsernamesFromFile(followersFile, (followers) => {
            extractUsernamesFromFile(followingFile, (following) => {
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

                setAnalysisResult(analysis);
            });
        });
    };

    // Function to display the round graph (pie chart)
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
                                color: "white", // Change legend label color to white
                            },
                        },
                    },
                },
            });
        }
    };

    // Function to display the trading view-like graph (line chart)
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
                            // Change dataset text color to white
                            pointBackgroundColor: "white",
                            pointBorderColor: "white",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            ticks: {
                                color: "white", // Change X-axis label color to white
                            },
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: "white", // Change Y-axis label color to white
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: "white", // Change legend label color to white
                            },
                        },
                        tooltip: {
                            callbacks: {
                                // Set tooltip text color to white
                                label: function (tooltipItem) {
                                    return ` ${tooltipItem.label}: ${tooltipItem.raw}`;
                                },
                                title: function () {
                                    return ''; // Remove title in the tooltip
                                }
                            },
                            titleColor: 'white', // Tooltip title color
                            bodyColor: 'white',  // Tooltip body color
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color
                        },
                    },
                },
            });
        }
    };

    // Handle "Show Graph" button click
    const handleShowGraph = () => {
        if (analysisResult) {
            const { totalFollowers, totalFollowing, notFollowingBack, mutualConnections } = analysisResult;
            displayPieGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
            displayLineGraph(totalFollowers, totalFollowing, notFollowingBack.length, mutualConnections.length);
        }
        setShowGraphs(true);
    };

    // Pagination: Get profiles for the current page
    const getCurrentPageProfiles = () => {
        if (analysisResult && analysisResult.notFollowingBack) {
            const { notFollowingBack } = analysisResult;
            const indexOfLastProfile = currentPage * profilesPerPage;
            const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
            return notFollowingBack.slice(indexOfFirstProfile, indexOfLastProfile);
        }
        return [];
    };

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle previous page
    const handlePrevPage = () => setCurrentPage(currentPage - 1);

    // Handle next page
    const handleNextPage = () => setCurrentPage(currentPage + 1);

    // Get total number of pages
    const totalPages = Math.ceil(analysisResult?.notFollowingBack.length / profilesPerPage);

    // Get the page numbers to show in pagination (only 3 page buttons)
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPages = Math.min(3, totalPages);
        for (let i = 1; i <= maxPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

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
                            {/* File Upload Inputs */}
                            <div className="head-box">
                                <div className="mb-3">
                                    <label htmlFor="fileInput1" className="form-label">
                                        Upload Followers File
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput1"
                                        className="form-control"
                                        accept=".html"
                                        onChange={(e) => setFollowersFile(e.target.files[0])}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="fileInput2" className="form-label">
                                        Upload Following File
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput2"
                                        className="form-control"
                                        accept=".html"
                                        onChange={(e) => setFollowingFile(e.target.files[0])}
                                    />
                                </div>

                                {!analysisResult && (
                                    <button
                                        className="btn btn-info w-100"
                                        onClick={analyzeInstagramData}
                                    >
                                        Analyze
                                    </button>
                                )}
                            </div>

                            {/* Results Section */}
                            {analysisResult && (
                                <div id="result" className="mt-4">
                                    <table
                                        className="table table-striped table-bordered table-hover"
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            border: '2px solid #30b21a',
                                        }}
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    colSpan="2"
                                                    className="text-center"
                                                    style={{
                                                        backgroundColor: '#1b1b1bd0',
                                                        color: '#30b21a',
                                                    }}
                                                >
                                                    <strong>Analysis Results</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="w-50" style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    <strong>Total Followers:</strong>
                                                </th>
                                                <td style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    {analysisResult.totalFollowers}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    <strong>Total Following:</strong>
                                                </th>
                                                <td style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    {analysisResult.totalFollowing}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{
                                                    padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0'

                                                }}>
                                                    <strong>Not Following Back:</strong>
                                                </th>
                                                <td style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    {analysisResult.notFollowingBack.length}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    <strong>Mutual Connections:</strong>
                                                </th>
                                                <td style={{ padding: '10px', color: 'white', backgroundColor: '#1b1b1bd0' }}>
                                                    {analysisResult.mutualConnections.length}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* Button to Show Graph */}
                                    {!showGraphs && (
                                        <button
                                            className="btn btn-success w-100 mt-3"
                                            onClick={handleShowGraph}
                                        >
                                            Show Graph
                                        </button>
                                    )}

                                    {/* Graph Section */}
                                    {showGraphs && (
                                        <div className="mt-4 graph-main row">
                                            {/* Pie Chart (Round Graph) */}
                                            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                                                <canvas ref={pieChartRef} width="300" height="300"></canvas>
                                            </div>

                                            {/* Line Chart (Trading View-like Graph) */}
                                            <div className="col-12 col-md-6 text-center">
                                                <canvas ref={lineChartRef} width="300" height="300"></canvas>
                                            </div>
                                        </div>
                                    )}

                                    {/* Profiles of Users Not Following Back */}
                                    {analysisResult.notFollowingBack.length > 0 && (
                                        <div className="mt-4 profile-card">
                                            <h4>People Not Following Back:</h4>
                                            <div className="row row-cols-1  row-cols-md-2 row-cols-lg-">
                                                {getCurrentPageProfiles().map((username, index) => (
                                                    <div className="col mb-4 " key={index}>
                                                        <div className="card shadow-sm ">
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
                                                                            style={{ padding: '4px' }}
                                                                        >
                                                                            View Profile
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
                                                {getPageNumbers().map((page) => (
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
