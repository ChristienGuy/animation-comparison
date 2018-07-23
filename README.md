# Animation libraries

## Pose

- Few stale issues, actively maintained.
- Docs are spread across multiple libraries so working out where to look is tricky.
- Docs are sometimes out of date with the actual API (e.g onPoseEnd is not document as part of React Pose but is available)
- Good response from maintainers on [https://spectrum.chat/popmotion/](https://spectrum.chat/popmotion/)
- Animating to 0 from arbitrary size just doesn't work.
- Declarative model plays nicely with styled-components type thinking.

## Motion

- Large number of unclosed and stale issues but is actively maintained.
- Docs are a mess, I need to use 3rd hand info to get things working.
- API is sort of mental but similar React Native's Animated.js.
- No control over duration, control via stiffness and damping etc. instead, trickier to get exactly what we're after.
- A lot of code to achieve relatively small things.

## Spring

- Very similar API to motion (relies on renderprops)
  - Means code gets very large very quickly
  - Does mean that the code for an animation is
