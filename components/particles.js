import Particles from "react-particles-js";

const ParticlesBackground = () => {
  if (typeof window !== "undefined") {
    return (
      <Particles
        width="100vw"
        height="100vh"
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
