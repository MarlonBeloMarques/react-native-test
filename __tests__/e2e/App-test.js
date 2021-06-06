import React from "react";
import { Button, Text, View } from "react-native";
import renderer from "react-test-renderer";
import { ActivityIndicator } from "react-native";
import TeamsList from "../../src/components/TeamsList";
import App from "../../App";      

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toBeTruthy();
});

it("renders the loading component when the app is first rendered", () => {
  const rendered = renderer.create(<App />);
  const TeamsListRendered = rendered.root.findByType(TeamsList);
  const ActivityIndicatorRendered =
    TeamsListRendered.findByType(ActivityIndicator);
  expect(ActivityIndicatorRendered).toBeTruthy();
});

it("renders welcome to react native", () => {
  const rendered = renderer.create(<App />);
  const root = rendered.root;
  expect(root.findAllByType(Text)[0].props.children).toEqual('Welcome to React Native!');
});

it("renders text", () => {
  const rendered = renderer.create(<App/>);
  const root = rendered.root;
  expect(root.findByType(View).findAllByType(Text)).toBeTruthy();

})

it("renders welcome", () => {
  const rendered = renderer.create(<App />);
  const root = rendered.root;
  expect(root.findAllByType(Text)[0].props.children.includes("Welcome")).toBe(
    true
  );
});

it("renders props", () => {
  const rendered = renderer.create(<App />);
  const TeamsListRendered = rendered.root.findByType(TeamsList);
  expect(TeamsListRendered.props.size).toBeTruthy();
  expect(TeamsListRendered.props.size).toEqual('large')
});

it("renders list length", () => {
  const rendered = renderer.create(<App />);
  const TeamsListRendered = rendered.root.findByType(TeamsList);
  expect(TeamsListRendered.props.list.length).toEqual(3);

  const list = TeamsListRendered.props.list;
  list.forEach((el, index) => {
    expect(el.id).toEqual(list[index].id)
  });
});

test("should toggle children nodes on button click", () => {
  const { act } = renderer;
  
  const root = renderer.create(<App/>).root;

  // helper to get nodes other than "button"
  const getChildrenCount = () =>
    root.findAll((node) => node.type !== Button).length;

  // assert that button exists
  expect(root.findAllByType(Button).length).toEqual(1);

  // query for a button
  const button = root.findAllByType(Button)[0];

  // remember initial nodes count (before toggle)
  const initialCount = getChildrenCount();

  // trigger a hook by calling onClick of a button
  act(button.props.onPress);
  const countAfterFirstClick = getChildrenCount();

  // assert that nodes count after a click is greater than before
  expect(countAfterFirstClick > initialCount).toBe(true);

  
  // trigger another click
  act(button.props.onPress);
  const countAfterSecondClick = getChildrenCount();

  // check that nodes were toggled off and the count of rendered nodes match initial
  expect(countAfterSecondClick === initialCount).toBe(true);
});
