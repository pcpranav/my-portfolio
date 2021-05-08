import React, { Component } from "react";
import Particles from "react-tsparticles";
import { langs } from "../user/user";

class ParticlesEffect extends Component {
  render() {
    let colors = ["#ffffff"];
    langs.forEach((lang) => {
      colors.push(lang.color);
    });
    return (
      <div className="particles-wrapper">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                  color: colors
                },
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: colors
              },
              links: {
                color: "random",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1.5
              },
              collisions: {
                enable: true
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 5,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800
                },
                value: 30
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
      </div>
    );
  }
}

export default ParticlesEffect;
