"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";



export default function TestForm() {
  const [vocationScores, setVocationScores] = useState({
    vocacion1: 0,
    vocacion2: 0,
    vocacion3: 0,
    vocacion4: 0,
    vocacion5: 0,
  });



  const initialValues = {
    questions: [
      {
        text: "Te gusta la naturaleza?",
        answer: "",
      },
      {
        text: "Disfrutas de la música?",
        answer: "",
      },
      {
        text: "Practicas deportes?",
        answer: "",
      },
    ],
  };

  const answerScores = {
    question0: {
      type: "ratio",
      Sí: { vocacion1: 2, vocacion5: 3, vocacion3: 1 },
      No: { vocacion2: 1 },
      "Me da igual": { vocacion3: 1 },
    },
    question1: {
      Sí: { vocacion1: 1 },
      No: { vocacion2: 0 },
      "Me da igual": { vocacion3: 2 },
    },
    question2: {
      Sí: { vocacion1: 3 },
      No: { vocacion2: 0 },
      "Me da igual": { vocacion3: 1 },
    },
  };

  const validationSchema = Yup.object().shape({
    questions: Yup.array().of(
      Yup.object().shape({
        text: Yup.string().required("This field is required"),
        answer: Yup.string().required("Please select an option"),
      })
    ),
  });

  const handleSubmit = (values) => {
    let updatedScores = { ...vocationScores };

    values.questions.forEach((question, index) => {
      const selectedAnswer = question.answer;
      const scoresToAdd = answerScores[`question${index}`][selectedAnswer];

      if (scoresToAdd) {
        // Suma las puntuaciones a las vocaciones correspondientes
        Object.keys(scoresToAdd).forEach((vocation) => {
          updatedScores[vocation] += scoresToAdd[vocation];
        });
      }
    });

    // Actualiza el estado con las nuevas puntuaciones
    setVocationScores(updatedScores);

    // Ahora puedes determinar la vocación predominante aquí
    const predominantVocation = Object.keys(updatedScores).reduce((a, b) =>
      updatedScores[a] > updatedScores[b] ? a : b
    );

    console.log("Puntuaciones por vocación:", updatedScores);
    console.log("Vocación predominante:", predominantVocation);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-4xl font-bold text-red-300">Iam vocational test</h2>

      {formik.values.questions.map((question, index) => (
        <div className="flex flex-col" key={index}>
          <label htmlFor={`question${index}`}>{question.text}</label>

          <input
            type="radio"
            id={`yes${index}`}
            name={`questions[${index}].answer`}
            value="Sí"
            onChange={formik.handleChange}
          />
          <label htmlFor={`yes${index}`}>Sí</label>

          <input
            type="radio"
            id={`no${index}`}
            name={`questions[${index}].answer`}
            value="No"
            onChange={formik.handleChange}
          />
          <label htmlFor={`no${index}`}>No</label>

          <input
            type="radio"
            id={`indifferent${index}`}
            name={`questions[${index}].answer`}
            value="Me da igual"
            onChange={formik.handleChange}
          />
          <label htmlFor={`indifferent${index}`}>Me da igual</label>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}
