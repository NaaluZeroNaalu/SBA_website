import r from "./images/resource3.jpg"

function Section1(){

    return(
        <>
        <div className="container">
           <div className="row">
           <div className="col">
                <h1>Our Solutions</h1>
                <h3>Infrastructure Management & security</h3>
                <ul>
                    <li>Automates security practices and compliance checks to reduce risks.</li>
                    <li>Enhances the efficiency of provisioning, configuration, and management of infrastructure through the implementation of Ansible.</li>
                    <li>Operates without the need for agents on target systems, simplifying deployment and reducing overhead.</li>
                </ul>
            </div>
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           <div className="col">
                <h1>Application Development and delivery:</h1>
                <ul>
                    <li>Facilitates the development, deployment, and management of applications in a containerized environment.</li>
                    <li>Facilitates the migration of outdated applications to contemporary architectures utilizing OpenShift</li>
                    <li>Enables deployment and management of applications at the edge, closer to data sources.</li>
                    <li>Provides capabilities for virtualizing resources and optimizing infrastructure usage.</li>
                </ul>
            </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
           <div className="col">
                <h1>OS management & Security</h1>
                
                <ul>
                    <li>Streamlines system administration and management tasks.</li>
                    <li>RHEL Provides tools and features for enhancing security and ensuring compliance with standards</li>
                    <li>Delivers stable and reliable performance across various workloads.</li>
                </ul>
            </div>
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           <div className="col">
                <h1>Products:</h1>
               <p>
               RHEL: Red Hat Enterprise Linux (RHEL) is a stable and secure Linux distribution 
               tailored for enterprise environments, offering robust performance and comprehensive 
               support It includes features like SELinux for enhanced security, regular updates for 
               vulnerability management, 
               and extensive documentation to aid system administrators in maintaining their infrastructure. 
               </p>
            </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
           <div className="col">
                <h1>Redhat Ansible automation platform:</h1>
                <p>
                Ansible is an open-source automation tool that simplifies 
                IT processes such as configuration management, application deployment, and orchestration 
                by using human-readable YAML playbooks, eliminating the need for agents on target systems.
                </p>
            </div>
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
            <div className="col">
            <img src={r} alt="" style={{width:"600px"}} />
            </div>
           <div className="col">
                <h1>Redhat Openshift:</h1>
               <p>
               OpenShift is a Kubernetes-based container platform developed by 
               Red Hat that facilitates the deployment, scaling, and management 
               of containerized applications. It provides a unified development 
               and operational experience, enabling teams to build, deploy,
                and manage applications consistently across hybrid cloud environments.
               </p>
            </div>
           </div>
        </div>

        <br />
        </>
    )
}

export default Section1