const BASE_URL = "https://www.BootstrapWorld.org/data/public/AssessmentActions.php";

class Telemetry {
  async log(payload: object) {
    console.log(payload)
    const url = `${BASE_URL}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Failed to log! ${JSON.stringify(response)}`);
    }
  }
}

if (typeof window !== "undefined") {
  window.telemetry = new Telemetry();
}
