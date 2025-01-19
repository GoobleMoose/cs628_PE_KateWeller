import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="header">
            <header className="header">
                <h1>Kate Weller</h1>
                <p1>Mountlake Terrace, Washington | (317) 417-5648 | kateweller317@gmail.com</p1>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Master of Science in Data Science</h3>
                <p>City University of Seattle, Seattle WA | August 2026</p>
                <h3>Bachelor of Science in Mathematics</h3>
                <p>Purdue University, West Lafayette IN | December 2010</p>
                </div>
            </section>

            <section>
                <h2>Skills and Knowledge</h2>
                <div className="skills">
                <p>Programming languages: Python, C#</p>
                <p>Database systems: MySQL, SSMS, MongoDB, PowerBI</p>
                <p>Operating systems: Windows, Linux</p>
                </div>
            </section>

            <section className="section">
                <h2>Experience</h2>
                <div className="experience">
                <h3>Business Analyst | Zenith American Solutions | November 2020 to Current</h3>
                <p>•	Collect and validate business-related data and assess data related issues</p>
                <p>•	Identify and evaluate relevant data and data needs</p>
                <p>•	Provide insight to assist with risk assessment, data reporting and interpretation, and business decision guidance</p>
                <p>•	Consult with unit management and personnel to identify, define, and document business objectives, current operational procedures, and input/output requirements</p>
                <p>•	Collaborate with external and internal team members to ensure all business objectives can be met</p>
                <p>•	Track and document changes by writing detailed, universally understood procedures to use as reference for training</p>
                <p>•	Identify opportunities for improving business processes through information systems and/or non-system driver changes; assist in the preparation of proposals to develop new systems and/or operational changes</p>
                <p>•	Understand client documents (Collective Bargaining Agreements, Summary Plan Descriptions, or Memorandums of Understanding) to ensure business practices and system performance adhere to requirements</p>
                <p>•	Determine what / where / how to pull ad hoc data reports and provide a detailed analysis</p>
                <p>•	Draw conclusions based on data in an effort to improve business operations</p>
                <p>•	Ability to jump from one client to another and manage multiple projects</p>
                <p>•	Act as Subject Matter Expert for contribution accounting and member eligibility</p>
                <p>•	Review data conversions for accuracy and test system improvements for defects</p>
                
                <h3>Assistant Supervisor | Zenith American Solutions | July 2020 to November 2020</h3>
                <p>•	Assist with client off-boarding</p>
                <p>•	Responsible for team productivity</p>
                <p>•	Provide comprehensive walkthrough of best business practices and system use for team members</p>
                <p>•	Use client-provided documentation to process escalated issues</p>
                <p>•	Ensure all shared spaces (physical and virtual) remain tidy</p>
                <p>•	Track plan and procedural documentation so all policies and system stay up-to-date; work directly with client if updates are required</p>
                <p>•	Train teammates on new programs or procedures</p>
                <p>•	Monitor business automation files so that any issues are caught and addressed</p>
                <p>•	Provide monthly and ad hoc reports to client and internal teams</p>
                <p>•	Track incoming bank deposits in order to ensure system balances with bank at all times</p>
                
                <h3>Senior Accounts Control Representative | Zenith American Solutions | May 2018 to July 2020</h3>
                <p>•	Generate remittance billing to contributing employers</p>
                <p>•	Process employer contribution payments and member self-payments</p>
                <p>•	Ensure bank balances with processed payments</p>
                <p>•	Work with external and internal teams in order to support members and maintain a positive client relationship</p>
                <p>•	Follow client-provided delinquency procedures in order to collect all necessary payments</p>
                <p>•	Perform in-depth reconciliations upon request</p>
                <p>•	Generate and explain data reports</p>
                <p>•	Enroll new members and track member eligibility</p>
                <p>•	Provide excellent customer service by being a Subject Matter Expert</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a personal website using React and deployed it on GitHub pages
                    </p>
                    <p>
                        Source code:{" "}
                        <a
                            href="https://github.com/GoobleMoose/MyResume"
                            targets="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/GoobleMoose/MyResume
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;