import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  border-radius: var(--radii);
  border-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5rem;
`;

export const Card = ({ img, name, info = [] }) => {
  const navigate = useNavigate();
  const adress = (name) =>
    navigate(`country/${name}`, { replace: false, state: name });

  return (
    <Wrapper onClick={() => adress(name)}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
