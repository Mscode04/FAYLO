import React, { useEffect, useState } from "react";

const AnalysisReport = () => {
    const [analysisResult, setAnalysisResult] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem("analysisResult");
        if (savedData) {
            setAnalysisResult(JSON.parse(savedData));
        }
    }, []);

    if (!analysisResult) {
        return <div>No analysis data found. Please perform an analysis first.</div>;
    }

    return (
        <div className="container">
            <h2>Analysis Report</h2>
            <p>Total Followers: {analysisResult.totalFollowers}</p>
            <p>Total Following: {analysisResult.totalFollowing}</p>
            <p>Not Following Back: {analysisResult.notFollowingBack.length}</p>
            <p>Mutual Connections: {analysisResult.mutualConnections.length}</p>
        </div>
    );
};

export default AnalysisReport;
