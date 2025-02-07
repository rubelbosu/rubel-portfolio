import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import Angry from "./components/Reactions/Angry";
import Sad from "./components/Reactions/Sad";
import Confused from "./components/Reactions/Confused";
import Happy from "./components/Reactions/Happy";
import Love from "./components/Reactions/Love";
import Feedbacks from "./components/Feedback/Feedbacks";
import isEmail from "validator/lib/isEmail";
import { isLength } from "validator";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

const feedback = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    Name: "",
    Email: "",
    Description: "",
    Rating: null,
  });
  const [clickedReaction, setClickedReaction] = useState({
    reaction: {
      angry: false,
      sad: false,
      confused: false,
      happy: false,
      love: false,
    },
    value: null,
  });
  const updateReactionSelected = (reaction) => {
    let temp;
    if (reaction === "Angry") {
      temp = {
        angry: true,
        sad: false,
        confused: false,
        happy: false,
        love: false,
      };
    } else if (reaction === "Sad") {
      temp = {
        angry: false,
        sad: true,
        confused: false,
        happy: false,
        love: false,
      };
    } else if (reaction === "Confused") {
      temp = {
        angry: false,
        sad: false,
        confused: true,
        happy: false,
        love: false,
      };
    } else if (reaction === "Happy") {
      temp = {
        angry: false,
        sad: false,
        confused: false,
        happy: true,
        love: false,
      };
    } else if (reaction === "Love") {
      temp = {
        angry: false,
        sad: false,
        confused: false,
        happy: false,
        love: true,
      };
    }
    setClickedReaction({ ...clickedReaction, reaction: temp, value: reaction });
    setInputData({ ...inputData, Rating: reaction });
  };
  const onchange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!isLength(inputData.Name, { min: 2, max: undefined })) {
      toast.error("Please enter atleast 3 characters in name", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      return;
    }
    if (!isEmail(inputData.Email)) {
      toast.error("Please enter valid email!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      return;
    }
    if (!isLength(inputData.Description, { min: 9, max: undefined })) {
      toast.error("Please enter atleast 10 characters in description", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      return;
    }
    if (inputData.Rating === null) {
      toast.error("Please select a rating among emojis", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      return;
    }
    setLoading(true);
    try {
      const url = `http://localhost:3000/api/postfeedback`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      if(response.status===200){
        toast.success("Feedback posted successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
          transition: Bounce,
        });
        setLoading(false);
        setInputData({
          ...inputData,
          Name: "",
          Email: "",
          Description: "",
          Rating: null,
        });
        setClickedReaction({
          ...clickedReaction,
          reaction: {
            angry: false,
            sad: false,
            confused: false,
            happy: false,
            love: false,
          },
          value: null,
        });
      }
      else{
        toast.error("Some error occured while posting feedback. Please try later", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
          transition: Bounce,
        });
        setLoading(false);
      }
    } catch (err) {
      toast.error("Some error occured while posting feedback. Please try later", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      setLoading(false);
    }
  };
  return (
    <section className="m-5">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
      <Card className="flex m-auto mt-10 max-w-[500px] min-w-[300px] max-h-[600px] min-h-[300px]">
        <CardHeader className="text-xl lg:text-2xl flex justify-center font-bold">
          Give Feedback
        </CardHeader>
        <CardBody>
          <Input
            isRequired
            type="text"
            label="Name"
            name="Name"
            value={inputData.Name}
            onChange={(e) => onchange(e)}
          />
          <Input
            isRequired
            className="mt-3"
            type="email"
            label="Email"
            name="Email"
            value={inputData.Email}
            onChange={(e) => onchange(e)}
          />
          <Textarea
            isRequired
            label="Description"
            placeholder="Write something about my treatment."
            className="mt-3"
            name="Description"
            value={inputData.Description}
            onChange={(e) => onchange(e)}
          />
          <div className="flex flex-col justify-center m-auto text-center mb-1">
            <p className="mt-4 font-bold text-md  mb-3">
            How are you feeling after the treatment?
            </p>
            <div className="flex gap-3">
              <Angry
                clicked={clickedReaction.reaction.angry}
                updateReactionSelected={updateReactionSelected}
              />
              <Sad
                clicked={clickedReaction.reaction.sad}
                updateReactionSelected={updateReactionSelected}
              />
              <Confused
                clicked={clickedReaction.reaction.confused}
                updateReactionSelected={updateReactionSelected}
              />
              <Happy
                clicked={clickedReaction.reaction.happy}
                updateReactionSelected={updateReactionSelected}
              />
              <Love
                clicked={clickedReaction.reaction.love}
                updateReactionSelected={updateReactionSelected}
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center mb-3">
          <Button
            color="success"
            className="font-bold text-white text-lg"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
      <Feedbacks loading={loading} />
    </section>
  );
};

export default feedback;
