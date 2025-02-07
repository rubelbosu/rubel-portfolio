import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import Feedback from "./Feedback";
import {
  Autocomplete,
  AutocompleteItem,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { error } from "console";

const Feedbacks = ({ loading }) => {
  const [value, setValue] = useState("Recent");
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState({ feedbacks: [], error: false });
  const filterTag = [
    {
      label: "Best",
      value: "Best",
      description: "Filter feedbacks from best rating to worst",
    },
    {
      label: "Recent",
      value: "Recent",
      description: "Filter feedbacks newly post to old ones",
    },
    {
      label: "Worst",
      value: "Worst",
      description: "Filter feedbacks from worst rating to best",
    },
  ];
  const onInputChange = (value) => {
    setValue(value);
    let temp = data;
    if (value === "Recent") {
      temp.feedbacks.sort((a, b) => {
        return new Date(a.Time) - new Date(b.Time);
      });
      setData({ ...data, feedbacks: temp.feedbacks });
    } else if (value === "Best") {
      temp.feedbacks.forEach((item) => {
        if (item.Rating === "Angry") {
          item.Rating = "1";
        } else if (item.Rating === "Sad") {
          item.Rating = "2";
        } else if (item.Rating === "Confused") {
          item.Rating = "3";
        } else if (item.Rating === "Happy") {
          item.Rating = "4";
        } else if (item.Rating === "Love") {
          item.Rating = "5";
        }
      });
      temp.feedbacks.sort((a, b) => {
        return parseInt(b.Rating) - parseInt(a.Rating);
      });
      temp.feedbacks.forEach((item) => {
        if (item.Rating === "1") {
          item.Rating = "Angry";
        } else if (item.Rating === "2") {
          item.Rating = "Sad";
        } else if (item.Rating === "3") {
          item.Rating = "Confused";
        } else if (item.Rating === "4") {
          item.Rating = "Happy";
        } else if (item.Rating === "5") {
          item.Rating = "Love";
        }
      });
      setData({ ...data, feedbacks: temp.feedbacks });
    } else if (value === "Worst") {
      temp.feedbacks.forEach((item) => {
        if (item.Rating === "Angry") {
          item.Rating = "1";
        } else if (item.Rating === "Sad") {
          item.Rating = "2";
        } else if (item.Rating === "Confused") {
          item.Rating = "3";
        } else if (item.Rating === "Happy") {
          item.Rating = "4";
        } else if (item.Rating === "Love") {
          item.Rating = "5";
        }
      });
      temp.feedbacks.sort((a, b) => {
        return parseInt(a.Rating) - parseInt(b.Rating);
      });
      temp.feedbacks.forEach((item) => {
        if (item.Rating === "1") {
          item.Rating = "Angry";
        } else if (item.Rating === "2") {
          item.Rating = "Sad";
        } else if (item.Rating === "3") {
          item.Rating = "Confused";
        } else if (item.Rating === "4") {
          item.Rating = "Happy";
        } else if (item.Rating === "5") {
          item.Rating = "Love";
        }
      });
      setData({ ...data, feedbacks: temp.feedbacks });
    }
  };
  const fetchdata = async () => {
    const url = `http://localhost:3000/api/fetchfeedback`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setData({ ...data, feedbacks: json.feedbacks, error: false });
    } else {
      setData({ ...data, feedbacks: json.error, error: true });
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchdata();
  }, [Loading, loading]);
  return (
    <section className="mt-20">
      <h1 className="text-xl lg:text-3xl flex justify-center font-bold mb-10">
        All Feedbacks
      </h1>
      <div className="flex flex-row justify-between m-5 gap-5">
        <div className="text-xl lg:text-3xl font-bold">Filter</div>
        <div>
          <Autocomplete
            label="Filter feedbacks"
            placeholder="filter feedbacks"
            defaultItems={filterTag}
            className="lg:max-w-xs"
            onInputChange={onInputChange}
            isDisabled={data.error}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
      </div>
      <Divider className="mb-10" />
      {loading || Loading ? (
        <Spinner
          className="flex justify-center mt-10 mb-10"
          label="Loading..."
          color="success"
        />
      ) : (
        (data.error)? <div className="flex items-center mb-52 flex-col"> <IoMdSettings className="animate-spin text-7xl lg:text-9xl"/> <div className="text-danger text-xl font-bold">{data.feedbacks}</div></div> : <div>
        {data.feedbacks.map((item, index) => {
          return (
            <Feedback
              key={index}
              Name={item.Name}
              Email={item.Email}
              Description={item.Description}
              Rating={item.Rating}
              Time={item.Time}
            />
          );
        })}
      </div>
      )}
    </section>
  );
};

export default Feedbacks;
