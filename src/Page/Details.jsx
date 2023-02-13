import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";

export const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = React.useState(null);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  React.useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
    </div>
  );
};
