const BASE_URL = "https://beta.BootstrapWorld.org/data/SubmitAssessment.php";

type Result =
  | { success: true; data: string }
  | { success: false; message: Error };

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

  isValid() {
    const url = `${BASE_URL}`;

    const urlParams = new URLSearchParams(document.location.search);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link_id: urlParams.get("assessmentId"),
        instructor_code: urlParams.get("teacherId"),
        method: "checkValidLink",
      })
    })
    .then(response => response.json())
    .catch(error => ({"success": false, "message": "Could not validate quiz link"}));

  }

}

if (typeof window !== "undefined") {
  window.telemetry = new Telemetry();
}
