function getSpeedValue() {
    const slider = document.getElementById("speedSlider");
    
    // Set initial progress
    const initialPercentage = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #3877e3 0%, #3877e3 ${initialPercentage}%, #e8eef9 ${initialPercentage}%, #e8eef9 100%)`;
    
    slider.addEventListener("input", function() {
        const value = this.value;
        document.getElementById("speedValue").textContent = Math.round(value * 100) + "%";
        
        // Update the progress bar
        const percentage = (value / this.max) * 100;
        this.style.background = `linear-gradient(to right, #3877e3 0%, #3877e3 ${percentage}%, #e8eef9 ${percentage}%, #e8eef9 100%)`;
    });
}

function getSpeedExample() {
    document.getElementById("speedSlider").addEventListener("input", function() {
        for (let i = 0; i < lightSpeedExamples.length; i++) {
            if (this.value == lightSpeedExamples[i].percent) {
                document.getElementById("speedExampleContent").textContent = lightSpeedExamples[i].description;
                document.getElementById("speedExampleImage").src = lightSpeedExamples[i].image;
            }
        }
    });

}

function calculateTimeDilation() {
    document.getElementById("calculateBtn").addEventListener("click", function() {
        let yearsForEarth = 1;
        let percentSpeedOfLight = document.getElementById("speedSlider").value
        let relativeYearsExperienced = yearsForEarth * Math.sqrt(1-(percentSpeedOfLight*percentSpeedOfLight))
        document.getElementById("earthTime").innerHTML = relativeYearsExperienced.toFixed(2) + " years"

    });
}


getSpeedExample()
getSpeedValue()
calculateTimeDilation()


const lightSpeedExamples = [
    {
      percent: 0,
      speed: "0 km/s",
      description: "Standing still (like Earth)",
      image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/ee63a2847023d573107982107171c7fed68e3cb0_image.png",
      alt: "Earth from space"
    },
    {
      percent: 0.5,
      speed: "~1,500,000 km/s",
      description: "Future sci-fi shuttle speed",
      image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3ada29febe452e5d160452a04f8cb8f29694c03a_image.png",
      alt: "Generic futuristic spacecraft"
    },
    {
      percent: 0.10,
      speed: "~3,000,000 km/s",
      description: "Star Wars: Millennium Falcon in hyperspace",
      image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/e6587d90c42f72eb456360ef0c5378528b10448d_image.png",
      alt: "Millennium Falcon jumping to lightspeed"
    },
    {
      percent: 0.15,
      speed: "~4,500,000 km/s",
      description: "The Expanse: Rocinante at high burn",
      image: "https://example.com/images/rocinante.jpg",
      alt: "Rocinante spaceship firing engines"
    },
    {
      percent: 0.20,
      speed: "~6,000,000 km/s",
      description: "Battlestar Galactica FTL jump speed",
      image: "https://example.com/images/galactica.jpg",
      alt: "Battlestar Galactica jumping"
    },
    {
      percent: 0.25,
      speed: "~7,500,000 km/s",
      description: "Elite Dangerous: Frame Shift Drive",
      image: "https://example.com/images/elite-dangerous.jpg",
      alt: "Spaceship in supercruise"
    },
    {
      percent: 0.30,
      speed: "~9,000,000 km/s",
      description: "Stargate: Prometheus at max speed",
      image: "https://example.com/images/prometheus.jpg",
      alt: "Prometheus spaceship in flight"
    },
    {
      percent: 0.35,
      speed: "~10,500,000 km/s",
      description: "Halo: Covenant slipspace rupture",
      image: "https://example.com/images/covenant-ship.jpg",
      alt: "Covenant ship entering slipspace"
    },
    {
      percent: 0.40,
      speed: "~12,000,000 km/s",
      description: "Mass Effect: Normandy SR-2 at FTL",
      image: "https://example.com/images/normandy.jpg",
      alt: "Normandy SR-2 in mass relay"
    },
    {
      percent: 0.45,
      speed: "~13,500,000 km/s",
      description: "Star Citizen: Quantum Travel",
      image: "https://example.com/images/star-citizen.jpg",
      alt: "Ship in quantum travel tunnel"
    },
    {
      percent: 0.50,
      speed: "~15,000,000 km/s",
      description: "Interstellar: Endurance cruise speed",
      image: "https://example.com/images/endurance.jpg",
      alt: "Endurance near Gargantua"
    },
    {
      percent: 0.55,
      speed: "~16,500,000 km/s",
      description: "Doctor Who: TARDIS in flight",
      image: "https://example.com/images/tardis.jpg",
      alt: "TARDIS flying through space"
    },
    {
      percent: 0.60,
      speed: "~18,000,000 km/s",
      description: "Star Trek: Warp Factor 9",
      image: "https://example.com/images/enterprise.jpg",
      alt: "USS Enterprise at warp"
    },
    {
      percent: 0.65,
      speed: "~19,500,000 km/s",
      description: "Farscape: Starburst velocity",
      image: "https://example.com/images/farscape.jpg",
      alt: "Moya in starburst"
    },
    {
      percent: 0.70,
      speed: "~21,000,000 km/s",
      description: "Babylon 5: Jumpgate transit",
      image: "https://example.com/images/babylon5.jpg",
      alt: "Ship entering jumpgate"
    },
    {
      percent: 0.75,
      speed: "~22,500,000 km/s",
      description: "Star Trek: Transwarp speed",
      image: "https://example.com/images/transwarp.jpg",
      alt: "Borg cube at transwarp"
    },
    {
      percent: 0.80,
      speed: "~24,000,000 km/s",
      description: "Warhammer 40K: Warp travel",
      image: "https://example.com/images/imperial-ship.jpg",
      alt: "Imperial ship in the warp"
    },
    {
      percent: 0.85,
      speed: "~25,500,000 km/s",
      description: "Andromeda: Slipstream velocity",
      image: "https://example.com/images/andromeda.jpg",
      alt: "Andromeda Ascendant"
    },
    {
      percent: 0.90,
      speed: "~27,000,000 km/s",
      description: "Back to the Future: DeLorean time-jump speed",
      image: "https://example.com/images/delorean.jpg",
      alt: "DeLorean leaving fire trails"
    },
    {
      percent: 0.95,
      speed: "~28,500,000 km/s",
      description: "Event Horizon: Hell dimension velocity",
      image: "https://example.com/images/event-horizon.jpg",
      alt: "Event Horizon spaceship"
    },
    {
      percent: 100,
      speed: "30,000,000 km/s (exact lightspeed)",
      description: "Theoretical limit: You are now light",
      image: "https://example.com/images/photon.jpg",
      alt: "Abstract light particle"
    }
  ];