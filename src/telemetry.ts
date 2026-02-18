const BASE_URL = "https://localhost/data/actions/SubmitAssessment.php?method=mdquizLog";

class Telemetry {
  async log(payload: object) {
    const url = `${BASE_URL}`;

    const urlParams = new URLSearchParams(document.location.search);
    let quizPath = document.location.href;

    // ensure that the quizPath is just to the containing folder
    if (!quizPath.endsWith("/")) {
      const lastSlash = quizPath.lastIndexOf("/");
      quizPath = quizPath.slice(0, lastSlash) + "/";
    }

    // manually attach the teacherId and quizPath
    (payload as any).instructor_code = urlParams.get("groupId");
    (payload as any).quizPath = quizPath;
    console.log('sending payload', payload);

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
