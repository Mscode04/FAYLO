import React from "react";
import { FaDownload, FaFolder, FaFileAlt, FaArrowRight, FaUpload, FaStepForward } from "react-icons/fa";
import '../App.css'; // Ensure you add the required styles in this CSS file

const Doc = () => {
  return (
    <div className="doc-container container py-4">
      <div className="doc-header text-center mb-4">
        <h1 className="display-4 text-pink">Faylo - Instagram Profile Analyzer Documentation</h1>
        <p className="lead text-white">
          Follow the step-by-step guide to analyze your Instagram profile using Faylo.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="step-card p-4 rounded shadow bg-dark2">
            <FaArrowRight className="step-icon" />
            <h2 className="h4 text-cyber-purple">Step 1: Request Your Instagram Data</h2>
            <p className="text-white">
              <strong>Go to the Instagram app:</strong> Navigate to your Instagram profile page. 
              In the top-right corner, click the menu button (three lines), and select "Settings".
            </p>
            <p className="text-white">
              <strong>Click on "Your Account":</strong> In the "Account" section, click on "Privacy and Security".
              Then, click on "Download Your Information".
            </p>
            <p className="text-white">
              <strong>Select Data:</strong> In the "Download or Transfer Your Information" section, select "Download Data" and 
              choose the option "All Data". Make sure the format is set to <strong>HTML</strong> and set the time range to <strong>All Time</strong>.
              Click on "Create File" and wait for Instagram to process the request (this can take up to 24 hours).
            </p>
            <FaDownload className="step-icon" />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="step-card p-4 rounded shadow bg-dark2">
            <FaStepForward className="step-icon" />
            <h2 className="h4 text-cyber-purple">Step 2: Download the Data</h2>
            <p className="text-white">
              After 24 hours, Instagram will notify you that the data is ready to be downloaded.
              <strong>Download the Zip file:</strong> Click the "Download" button and save the Zip file to your device.
            </p>
            <p className="text-white">
              Extract the Zip file and open the "connections" folder. Inside, you'll find two files: 
              <strong>following_1.htm</strong> and <strong>followers.htm</strong>.
            </p>
            <FaFolder className="step-icon" />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="step-card p-4 rounded shadow bg-dark2">
            <FaFileAlt className="step-icon" />
            <h2 className="h4 text-cyber-purple">Step 3: Upload Files to Faylo</h2>
            <p className="text-white">
              Now, go to the <a href="https://mscode04.github.io/FAYLO/" target="_blank" rel="noopener noreferrer" className="text-cyber-purple">Faylo website</a>.
              On the homepage, you'll find two upload options:
            </p>
            <ul className="text-white">
              <li>Upload the <strong>following_1.htm</strong> file.</li>
              <li>Upload the <strong>followers.htm</strong> file.</li>
            </ul>
            <p className="text-white">
              Once uploaded, click on the "Analyze" button, and Faylo will process your Instagram data and provide insights.
            </p>
            <FaUpload className="step-icon" />
          </div>
        </div>
      </div>

      <div className="note bg-card-gr p-4 rounded mt-4">
        <h2 className="h4 text-white">Important Notes:</h2>
        <ul className="text-white">
          <li>Make sure that the data is in HTML format.</li>
          <li>The process might take up to 24 hours for Instagram to prepare the data.</li>
          <li>Ensure the "following_1" and "followers" files are correctly uploaded to Faylo for accurate analysis.</li>
        </ul>
      </div>
    </div>
  );
};

export default Doc;
