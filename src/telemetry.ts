const BASE_URL = "https://beta.BootstrapWorld.org/data/SubmitAssessment.php";

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
    (payload as any).instructor_code = urlParams.get("teacherId");
    (payload as any).class_name = urlParams.get("groupId");
    (payload as any).link_id    = urlParams.get("assessmentId");
    (payload as any).method     = "submitEntry";
    (payload as any).quizPath   = quizPath;
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

  async isValid() {
    const url = `${BASE_URL}`;

    const urlParams = new URLSearchParams(document.location.search);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link_id: urlParams.get("assessmentId"),
        instructor_code: urlParams.get("teacherId"),
        method: "checkValidLink",
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to log! ${JSON.stringify(response)}`);
    } else {
      console.log(response);
    }

  }
}

if (typeof window !== "undefined") {
  window.telemetry = new Telemetry();
}
