import Particles from "react-particles-js";

const ParticlesBackground = ({ width, height }) => {
  if (typeof window !== "undefined") {
    return (
      <Particles
        width={width || "auto"}
        height={height || "auto"}
        params={{
          particles: {
            number: {
              value: 100
            },
            size: {
              value: 2
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    );
  } else {
    return <canvas />;
  }
};

export default ParticlesBackground;
