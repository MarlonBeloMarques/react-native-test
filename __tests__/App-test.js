import React from "react";
import renderer from "react-test-renderer";
import { ActivityIndicator } from "react-native";
import TeamsList from "../src/components/TeamsList";
import App from "../App";

// test("renders correctly", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toBeTruthy();
// });

it("renders the loading component when the app is first rendered", () => {
  const rendered = renderer.create(<App />);
  const TeamsListRendered = rendered.root.findByType(TeamsList);
  const ActivityIndicatorRendered =
    TeamsListRendered.findByType(ActivityIndicator);
  expect(ActivityIndicatorRendered).toBeTruthy();
});