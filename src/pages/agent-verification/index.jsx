import Back from "../../component/back";

const AgentVerification = () => {
  return (
    <div className="m max max-w-screen-xl mx-auto px-4 mt-24">
      <Back />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col gap-5 mt-5">
          <h1 className="text-xl sm:text-[30px] font-medium text-[#0979A1]">
            Agent Verification
          </h1>
          <p className="text-base text-left lg:text-lg font-normal text-[#040821] font-montserrat">
            In the Questproperty app, agent verification is essential for
            maintaining a safe, trustworthy, and reliable environment for users.
            Here’s a breakdown of the "how" and "why" behind this process:
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            1. Trust and Credibility
          </span>
        </h1>
        <p>
          Verified agents help build trust with users. It reassures clients that
          they’re dealing with a legitimate professional, reducing the risk of
          fraud or misrepresentation.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            2. Quality Control
          </span>
        </h1>
        <p>
          By verifying agents, Questproperty ensures that only qualified,
          experienced professionals are representing properties on the platform,
          which helps maintain high sta.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            3. Compliance and Security
          </span>
        </h1>
        <p>
          Verifying agents also helps in adhering to legal and industry
          standards, offering users a safer browsing experience.
        </p>
      </div>

      <h1 className="text-xl sm:text-[30px] font-medium text-[#0979A1]">
        How Verification Works:
      </h1>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            1. Submission of Documentation
          </span>
        </h1>
        <p>
          Agents provide identification documents, business licenses, or other
          credentials that establish their legitimacy and qualifications.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            2. Background Checks
          </span>
        </h1>
        <p>
          Questproperty may conduct background checks to verify the agent's
          professional history, ensuring no history of fraudulent behavior.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            3. Profile Review and Approval
          </span>
        </h1>
        <p>
          the verification team reviews the documentation and information
          provided by agents. Once approved, they receive a verified badge or
          status on their profile.
        </p>
      </div>

      <p>
        This verification system helps maintain Questproperty’s reputation,
        enhances user confidence, and creates a more secure environment for
        property transactions.
      </p>
    </div>
  );
};

export default AgentVerification;
