import React from 'react';
import Left from './Left';
import Right from './Right';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

const Icon = (props) => {
  console.log('props:', props);

  return <p style={props}>{props.text}</p>;
};
const Button = ({ icon, text }) => {
  return (
    <button>
      {icon({ color: 'green' })}
      {text}
    </button>
  );
};

export const SplitScreen = ({
  // left: Left,
  // right: Right,
  children,
  weights,
}) => {
  // const [left, right] = children;
  console.log(':', children);

  return (
    <div>
      <Container>
        {children &&
          children.map((comp, index) => (
            <Pane key={weights[index]} weight={weights[index]}>
              {comp}
            </Pane>
          ))}

        {/*
				<Pane weight={leftWeight}>{left}</Pane>
				<Pane weight={rightWeight}>{right}</Pane>
        */}
      </Container>
      <Button
        icon={({ color }) => <Icon color={color} text="Test text" />}
      ></Button>
    </div>
  );
};
