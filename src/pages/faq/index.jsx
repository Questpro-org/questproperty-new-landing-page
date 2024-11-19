import React from "react";
import { useState } from "react";
import Icon from "../../assets/icon";

function FaqQuestions() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const questions = [
    {
      id: "1",
      question: "What types of properties are listed on Questproperty Africa?",
      answer:
        "Questproperty Africa offers a wide range of properties including residential houses, apartments, lands for sale, and short-term rental apartments.",
    },
    {
      id: "2",
      question: "How can I search for properties on Questproperty Africa?",
      answer:
        "You can search for properties on Questproperty Africa by using our intuitive search filters such as location, property type, price range, number of bedrooms, and more. Simply enter your criteria and browse through the listings that match your preferences.",
    },
    {
      id: "3",
      question: "Are the agents on Questproperty Africa verified?",
      answer:
        "Yes, all agents on Questproperty Africa undergo a thorough verification process to ensure authenticity and trustworthiness. This verification process helps to mitigate the risk of fraudulent listings and provides peace of mind to property seekers.",
    },
    {
      id: "4",
      question: "How can I contact an agent for a property I'm interested in?",
      answer:
        "You can easily contact an agent for a property you're interested in by using the in-app messaging feature on Questproperty Africa. Simply navigate to the property listing and click on the 'Contact Agent' button to initiate a conversation with the agent.",
    },
    {
      id: "5",
      question: "Can I view properties in 3D mode on Questproperty Africa?",
      answer:
        "Yes, Questproperty Africa leverages advanced technology to offer customers the option to view properties in immersive 3D mode. This feature provides a more realistic and interactive viewing experience, allowing you to explore properties from the comfort of your own home.",
    },
    {
      id: "6",
      question: "How can I boost my property listing on Questproperty Africa?",
      answer:
        "Agents can boost their property listings on Questproperty Africa by opting for our affordable monthly boosting options. Additionally, agents can earn a full month of VIP property boosting by successfully referring 10 new users to the platform.",
    },
    {
      id: "7",
      question: "Is Questproperty Africa available in Ghana and Liberia?",
      answer:
        "While Questproperty Africa is currently available in over 20 states in Nigeria, we are actively working towards expanding our presence to Ghana and Liberia by the beginning of 2025.",
    },
    {
      id: "8",
      question:
        "How does Questproperty Africa ensure the security of my personal information?",
      answer:
        "Questproperty Africa takes the security and privacy of your personal information seriously. We employ strict data security measures and encryption protocols to safeguard your information and ensure compliance with relevant data protection regulations.",
    },
    {
      id: "9",
      question: "What payment options are available on Questproperty Africa?",
      answer:
        "Questproperty Africa offers various payment options for property-related transactions, including credit/debit card payments, bank transfers, and mobile money transfers, providing convenience and flexibility for our users.",
    },
    {
      id: "10",
      question: "How can I report a fraudulent listing on Questproperty Africa?",
      answer:
        "If you come across a suspicious or fraudulent listing on Questproperty Africa, please report it immediately by contacting our customer support team. We take reports of fraudulent activity seriously and will take appropriate action to address the issue promptly.",
    },
  ];

  const handleClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? "" : id);
  };

  return (
    <section className="mt-36 max-w-screen-xl mx-auto">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className="flex flex-col gap-4 border-b border-[#D6DDE9] lg:w-1/2 lg:mx-auto mx-6 bg-opacity-60 py-5 cursor-pointer"
        >
          <div className="flex justify-between items-center font-medium text-base leading-6 text-black">
            <p className="text-center">{question.question}</p>
            {selectedQuestion === question.id ? (
              <Icon name="menucloseicon" />
            ) : (
              <Icon name="plusicon" />
            )}
          </div>

          {selectedQuestion === question.id && (
            <p className=" text-[#5D6377] font-normal text-sm">
              {question.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FaqQuestions;
