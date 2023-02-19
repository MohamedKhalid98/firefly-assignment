import React, { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import _ from "lodash";
import classNames from "classnames";
import moment from "moment";
import { uniqueId } from "lodash";
import { data } from "./data";
import EditIcon from "../../assets/icons/edit.svg";
import ExportIcon from "../../assets/icons/export.svg";
import SaveIcon from "../../assets/icons/save.svg";

import "./Configurations.scss";

const Configurations = () => {
  const [commits, setCommits] = useState([]);
  const [onEditModeId, setOnEditModeId] = useState(null);
  const [onEditCode, setOnEditCode] = useState(null);

  useEffect(() => {
    const sortedCommits = _.sortBy(data, ["timestamp"]).reverse();
    setCommits(sortedCommits);
  }, []);

  const getDate = (timestamp) => {
    if (!timestamp) return <span className="text-warning">UNKNOWN</span>;
    return moment.unix(timestamp).format("lll");
  };
  const getUsername = (username) => {
    if (!username) return <span className="text-warning">UNKNOWN</span>;
    return <span className="text-white">{username}</span>;
  };

  const handleSaveUpdatedCode = () => {
    if (onEditCode) {
      const newCommitMessage = prompt("Commit message");
      if (!newCommitMessage) return;
      const newCommit = {
        ...commits.find((commit) => commit.id == onEditModeId),
      };
      newCommit.id = uniqueId("commit");
      newCommit.code_block = onEditCode;
      newCommit.message = newCommitMessage;
      newCommit.timestamp = moment().unix();
      newCommit.username = "You";
      const updatedCommits = [newCommit, ...commits];
      setCommits(updatedCommits);
    }
    setOnEditModeId(null);
    setOnEditCode(null);
  };
  const handleDownload = (commitId) => {
    if (commitId == onEditModeId) {
      setOnEditModeId(null);
      handleSaveUpdatedCode();
    }
    const commit = commits.find((commit) => commit.id == commitId);
    const textDataBlob = new Blob([commit.code_block], {
      type: "text/plain",
    });
    const downloadUrl = window.URL.createObjectURL(textDataBlob);
    const downloadLink = document.createElement("a");
    downloadLink.download = commit.file_name || "code";
    downloadLink.href = downloadUrl;
    downloadLink.click();
  };
  const handleEditMode = (commitId) => {
    setOnEditModeId(commitId);
    setOnEditCode(null);
  };
  const handleCodeChange = ({ target }) => {
    setOnEditCode(target.value);
  };
  return (
    <>
      <section className="configurations">
        <h3 className="mb-3">Configuraions</h3>
        <div className="accordion accordion-flush" id="commitsAccordion">
          {commits.map((commit) => (
            <div className="accordion-item" key={commit.id}>
              <h2 className="accordion-header" id={`heading-${commit.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${commit.id}`}
                  aria-expanded="false"
                  aria-controls={commit.id}>
                  <div className="commit-wrapper">
                    <div
                      className={classNames(
                        "commit-message mb-1",
                        !commit.message && "no-message text-warning"
                      )}>
                      {commit.message || "No commit message"}
                    </div>
                    <div>
                      {getUsername(commit.username)}{" "}
                      <span className="commit-date">
                        Committed on {getDate(commit.timestamp)}
                      </span>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={commit.id}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${commit.id}`}
                data-bs-parent="#commitsAccordion">
                <div className="text-light small px-4">
                  {commit.file_name || "unknown file name"}
                </div>
                <div className="accordion-body">
                  <div className="actions">
                    {commit.id == onEditModeId ? (
                      <button className="btn" onClick={handleSaveUpdatedCode}>
                        <img src={SaveIcon} alt="save icon" width={20} />
                      </button>
                    ) : (
                      <>
                        <button className="btn">
                          <img
                            src={EditIcon}
                            alt="edit icon"
                            width={20}
                            onClick={() => handleEditMode(commit.id)}
                          />
                        </button>
                        <button
                          className="btn"
                          onClick={() => handleDownload(commit.id)}>
                          <img src={ExportIcon} alt="export icon" width={20} />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="code-block">
                    {onEditModeId == commit.id ? (
                      <CodeEditor
                        language="yaml"
                        minHeight={150}
                        onChange={handleCodeChange}
                        className="active"
                        padding={12}
                        value={onEditCode ? onEditCode : commit.code_block}
                      />
                    ) : (
                      <CodeEditor
                        value={commit.code_block}
                        disabled
                        padding={12}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Configurations;
