import Back from "../../component/back";


const Terms = () => {
  return (
    <div className="m max max-w-screen-xl mx-auto px-4 mt-24">
      <Back />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col gap-5 mt-5">
          <h1 className="text-xl sm:text-[30px] font-medium text-[#0979A1]">
            <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
              Terms
            </span>{" "}
            and Conditions
          </h1>
          <p className="text-base text-left lg:text-lg font-normal text-[#040821] font-montserrat">
            Here's a basic outline of terms and conditions for your
            Questproperty app, covering both users and agents. You should review
            this with legal counsel to ensure it meets all regulatory and
            business requirements.
          </p>
          <p className="text-base text-left lg:text-lg text-[#040821] font-montserrat">
            These Terms and Conditions ("Terms") govern your access to and use
            of the Questproperty app (the "App"), provided by Questproperty
            ("we," "us," or "our"). By using the App, you agree to comply with
            these Terms. If you do not agree to these Terms, do not use the App.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            1. Definitions
          </span>
        </h1>
        <p>
          <span className="font-bold"> User:</span> A person who uses the
          Questproperty App to browse, inquire, or book properties.
        </p>

        <p>
          <span className="font-bold"> Agent:</span> A property manager,
          realtor, or entity that lists and manages properties on the
          Questproperty platform.
        </p>

        <p>
          <span className="font-bold"> Services:</span> All services provided
          through the App, including property listings, inquiries, and
          transactions.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            2. Eligibility
          </span>
        </h1>
        <p>You must be at least 18 years of age to use this App.</p>

        <p>
          Agents must be licensed and authorized to sell, rent, or manage
          properties in their respective jurisdictions.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            3. Account Registration
          </span>
        </h1>
        <p>
          <span className="font-bold"> User:</span> may browse the App without
          registration, but to make inquiries or bookings, you must create an
          account.
        </p>

        <p>
          <span className="font-bold"> Agent:</span> are required to create an
          account and provide accurate details about their business, properties,
          and licensing.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activities under your account.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            4. Listings (For Agents)
          </span>
        </h1>
        <p>
          Agents are responsible for ensuring that all property listings are
          accurate, up to date, and compliant with applicable laws.
        </p>

        <p>
          By listing a property, Agents represent and warrant that they have the
          right to list and market the property.
        </p>

        <p>
          Agents are prohibited from listing properties with false, misleading,
          or deceptive information.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            5. Property Transactions
          </span>
        </h1>
        <p>
          Questproperty acts as an intermediary between Users and Agents. We are
          not a party to any transaction or agreement made between Users and
          Agents.
        </p>

        <p>
          All transactions are the sole responsibility of the parties involved,
          including pricing, negotiation, and agreements.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            6. Payments and Fees
          </span>
        </h1>
        <p>
          Users may be required to pay fees to book or inquire about properties.
        </p>

        <p>
          Agents may be subject to listing fees, subscription fees, or
          commissions as per our pricing policies.
        </p>

        <p>
          All payments are processed securely, and refunds are subject to our
          cancellation policy (see below).
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            7. Cancellations and Refunds
          </span>
        </h1>
        <p>
          <span className="font-bold"> User:</span> If you need to cancel a
          booking, please refer to the cancellation policy provided by the
          Agent. Refunds are subject to the Agent’s policies.
        </p>

        <p>
          <span className="font-bold"> Agent:</span> If you wish to remove a
          listing, you may do so at any time. Any associated fees for that
          listing may not be refundable.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            8. Prohibited Activities
          </span>
        </h1>
        <p>
          <span className="font-bold"> Users and Agents may not:</span>
        </p>

        <p>Use the App for illegal or unauthorized purposes.</p>
        <p>Misrepresent any information provided on the App.</p>
        <p>
          Engage in any fraudulent activities, including false listings or
          inquiries.
        </p>
        <p>
          Upload viruses, malware, or any harmful code that could affect the
          App’s functionality.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            9. Intellectual Property
          </span>
        </h1>
        <p>
          Questproperty retains all rights to the content, design, and
          functionalities of the App. You may not reproduce, distribute, or use
          any part of the App without our written consent.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            10. Privacy
          </span>
        </h1>
        <p>
          By using the App, you agree to our Privacy Policy, which governs how
          we collect, use, and store your personal information.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            11. Termination
          </span>
        </h1>
        <p>
          We may suspend or terminate your access to the App at any time, with
          or without cause, and without notice.
        </p>

        <p>
          You may terminate your account at any time by contacting customer
          support. Upon termination, any pending transactions will be subject to
          these Terms.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            12. Dispute Resolution
          </span>
        </h1>
        <p>
          Any disputes arising between Users and Agents must be resolved
          directly between the parties. Questproperty is not responsible for
          resolving disputes.
        </p>

        <p>
          Any legal claims against Questproperty must be filed within 14 days (
          two weeks) from the occurrence of the issue, and will be subject to
          the laws of [Jurisdiction].
        </p>
        <p>
          Pursuant to the terms agreed upon by both users and agents,
          Questproperty’s liability for damages, in the event of a finding of
          liability, shall be limited to a maximum of 100,000 Naira, regardless
          of the nature of the claim.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            13. Limitation of Liability
          </span>
        </h1>
        <p>
          Questproperty is not liable for any damages, direct or indirect, that
          result from the use or inability to use the App, including lost
          profits, property disputes, or personal harm.
        </p>

        <p>
          ⁠users are advised to chat with or meet with only verified agents.
        </p>
        <p>
          Meeting up with/or dealings with any unverified agents is at the
          discretion of the users and Questproperty would not be held liable for
          any damages incurred.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            14. Changes to These Terms
          </span>
        </h1>
        <p>
          We may update these Terms from time to time. Continued use of the App
          after such changes will constitute acceptance of the updated Terms.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 mb-5">
        <h1 className="text-xl sm:text-[18px] font-medium text-[#0979A1]">
          <span className="border border-t-0 border-l-0 border-r-0 border-b-[#0979A1]">
            15. Contact Information
          </span>
        </h1>
        <p>
        If you have any questions about these Terms, please contact us at:
       <b> support@questpro.ng</b> 
        </p>
      </div>
    </div>
  );
};

export default Terms;
