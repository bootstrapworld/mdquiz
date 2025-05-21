const BASE_URL = "https://www.BootstrapWorld.org/data/public/AssessmentActions.php";

class Telemetry {
  async log(payload: object) {
    const url = `${BASE_URL}`;

    const urlParams = new URLSearchParams(document.location.search);

    // artificially attach the teacherId
    (payload as any).instructor_code = urlParams.get("teacherId");

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
