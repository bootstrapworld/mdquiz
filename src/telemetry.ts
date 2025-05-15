const BASE_URL = "https://www.BootstrapWorld.org/data/actions/AssessmentActions.php";

class Telemetry {
  async log(payload: object) {
    const url = `${BASE_URL}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Failed to log with status: ${response.statusText} `);
    }
  }
}

if (typeof window !== "undefined") {
  window.telemetry = new Telemetry();
}
