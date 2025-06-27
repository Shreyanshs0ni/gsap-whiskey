import React, { useEffect, useState } from "react";
import { ingredients } from "../../constants";
import Lottie from "react-lottie";
import animationData from "../lotties/liquid.json";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const AiRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const removeRecipe = () => {
    setRecipe("");
  };
  const handleSelect = (e) => {
    const { value, checked } = e.target;
    setSelectedIngredients((prev) =>
      checked ? [...prev, value] : prev.filter((i) => i !== value),
    );
  };

  const getRecipe = async () => {
    if (selectedIngredients.length === 0) return;
    setLoading(true);
    try {
      const prompt = `Create a unique alcoholic whiskey mocktail using these ingredients: ${selectedIngredients.join(", ")}. Give it a name, flavor notes, and step-by-step recipe.`;
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.8,
          }),
        },
      );
      const data = await response.json();
      setRecipe(data.choices[0].message.content.trim());
      setLoading(false);
      toast.success("Recipe generated");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useGSAP(() => {
    const titleSplit = SplitText.create("#ai-recipe h1", { type: "words" });
    const subtitleSplit = SplitText.create("#ai-recipe p", { type: "words" });
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ai-recipe",
        start: "top center",
      },
    });
    scrollTl
      .from("#left-gun", {
        duration: 0.8,
        xPercent: -100,
        rotate: "360 deg",
        ease: "power1.inOut",
      })
      .from(
        "#right-gun",
        {
          duration: 0.8,
          xPercent: 100,
          rotate: "-360 deg",
          ease: "power1.inOut",
        },
        "<",
      );
    scrollTl
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        rotate: "180 deg",
        stagger: 0.2,
        ease: "back.inOut",
      })
      .from(subtitleSplit.words, {
        opacity: 0,
        duration: 1,
      });
  });
  //   useEffect(() => {
  //     console.log(selectedIngredients);
  //   }, [handleSelect]);

  return (
    <div id="ai-recipe">
      <div>
        <h1>Mix Your Own Magic</h1>
        <p>Pick your ingredients. We’ll mix the rest.</p>
      </div>
      <img src="/images/left-gun.png" alt="left gun" id="left-gun" />
      <img src="/images/right-gun.png" alt="right gun" id="right-gun" />
      {recipe ? (
        <div className="mt-4 p-4 shadow">
          <pre className="bg-yellow container h-160 w-300 overflow-y-auto rounded-2xl px-10 py-5 text-lg whitespace-pre-wrap text-black">
            {recipe}
          </pre>
        </div>
      ) : loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div className="ingredients">
          {ingredients.map((ingredient) => (
            <label key={ingredient}>
              <input
                type="checkbox"
                value={ingredient}
                onChange={handleSelect}
              />
              <span>{ingredient}</span>
            </label>
          ))}
        </div>
      )}

      {!recipe ? (
        <button
          onClick={getRecipe}
          className={`${loading ? "liquid" : "text-black"} `}
        >
          <h2>{loading ? "Mixing" : "Start Mixing"}</h2>
        </button>
      ) : (
        <button
          onClick={removeRecipe}
          className={`${recipe ? "block text-black" : "hidden"}`}
        >
          <h2>Go Back</h2>
        </button>
      )}
    </div>
  );
};

export default AiRecipe;
