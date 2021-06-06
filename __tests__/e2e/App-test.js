import React from "react";
import { Text, View } from "react-native";
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