______________________________________
# Context

Apepê is an app focused on improving the experience of residents within their condominiums. The platform brings together various features and services that make everyday life easier, such as booking common areas, accessing an autonomous mini-market, and other routine tasks — all in a simple and practical way, directly through the app.  
![User Journey Map](/images/project-1/apepe_thumbnail.jpg)

_________________________________________
# Understanding  
<div class="prose max-w-4xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> 
    <div>
      <h4>Problem</h4>
      <p>
        To access the app's features, users needed to prove their connection to the condominium during the sign-up process.  
        The challenge was to allow this verification without publicly exposing internal condominium information — such as names, shared areas, or rules — to anyone who downloaded the app.
      </p>
    </div>
    <div>
      <h4>Target audience</h4>
      <p>
        Residents of condominiums in the implementation phase of Apepê services.  
        These users download the app for the first time, register, and need to properly link to their condominium to access the platform's exclusive features.
      </p>
    </div>
    <div>
      <h4>Solution</h4>
          <p>
           After signing up, the app intuitively guides the user to connect to their condominium. During the rollout, unique QRCodes were distributed to take the resident directly to the registration flow linked to their building, ensuring security and reducing friction.
          </p>
    </div>
    <div>
      <h4>Outcome</h4>
        <p>
          After improving the sign-up and linking flow, usability testing showed positive results across all evaluated metrics: <strong>Perceived Difficulty, Task Time, Success Rate, Error Rate.</strong>
        </p>
  </div>
</div>

____________________________________________
# My Role  
<div>
  <ul class="list-disc pl-6 text-gray-700 space-y-2">
    <li>
      <strong>UX Design</strong> – Creating flows, wireframes, interfaces, and high-fidelity prototypes for web and mobile.
    </li>
    <li>
      <strong>UX Research</strong> – Conducting interviews, analyzing user journeys, defining hypotheses, and validating with qualitative data.
    </li>
    <li>
      <strong>Prototyping</strong> – Developing navigable prototypes focused on testing and rapid iteration.
    </li>
    <li>
      <strong>Usability Testing</strong> – Planning, executing, and analyzing user tests to evaluate the registration flow’s efficiency, clarity, and accessibility.
    </li>
  </ul>
</div>
____________________________________
# Design Process

<h4>1.</h4>
<h3 class="text-lg font-semibold">🧭 User Journey</h3>

To better understand the onboarding flow, I mapped out the user journey starting from the initial point: scanning the QRCode placed in the condominium.

![User Journey Map](/images/project-1/userflow_condominium-conection.png)
## The journey helped us identify that users would need clear guidance at each step. During this mapping, recurring doubts emerged, especially related to the moment of validation and connection with the condominium.
<br><br>

<h4>2.</h4>
<h3 class="text-lg font-semibold">🧪 Prototype</h3>
<p class="text-gray-600 text-sm">
  Based on the journey, I developed a high-fidelity prototype to provide users with a testing experience as close to the real interface as possible.
</p>
<div class="aspect-video">
  <iframe
    src="https://player.vimeo.com/video/793933696?h=c6d9d6c0f5&autoplay=1&loop=1"
    class="w-full h-full"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    title="High-fidelity prototype demonstration">
  </iframe>
</div>

## Choosing this level of fidelity was especially important for users with limited tech experience or older age, ensuring better understanding and engagement during the tests.
<br><br>

![Main Test Screens](/images/project-1/main_screens.png)
<div>
  <div class="flex flex-col space-y-4">
    <h4>3.</h4>
    <h3 class="text-lg font-semibold">👥 Usability Testing</h3>
    <p class="text-gray-600 text-sm">
      With the prototype ready, we conducted usability testing with 15 participants. <br><br>
      We prioritized selecting extreme users — people with little or no experience with apps, and older users. The hypothesis was that if the flow worked well for these groups, it would perform well for others too.<br><br>
      We applied the first round of testing with the first 10 participants. Based on their feedback, we made improvements and validated the optimized version with the remaining 5 users.
    </p><br><br>
    <h4>Test Script</h4>
      The test script included 3 tasks the user had to perform:<br>
      1. Sign up<br>
      2. Email verification<br>
      3. Request condominium connection<br>
  </div><br><br>

  #### 1. Sign up
  ![Main Test Screens](/images/project-1/usability_test/1_sign_in_before.png)

  ![Main Test Screens](/images/project-1/usability_test/1_sign_in_after.png)
  #### 2. Email verification
  ![Main Test Screens](/images/project-1/usability_test/2_email_validation_before.png)

  ![Main Test Screens](/images/project-1/usability_test/2_email_validation_after.png)
  #### 3. Request condominium connection 
  ![Main Test Screens](/images/project-1/usability_test/3_condominium_conection_before.png)

  ![Main Test Screens](/images/project-1/usability_test/3_condominium_conection_after.png)
  <h4>4.</h4>
  <h3 class="text-lg font-semibold">📊 Data Compilation & Metrics</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4>SUS (System Usability Scale)</h4>
        At the end of the tests, we applied the <strong>SUS Scale</strong> with 10 statements per user to measure perceived usability in a structured way. Each item was rated on a scale from 1 (strongly disagree) to 5 (strongly agree).<br><br>
      </div>
      <div>
        <h4>Sample statements used:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>I will be able to use the app</li>
          <li>I found the sign-up easy</li>
          <li>I felt confident requesting the link</li>
          <li>I think the registration has too many inconsistencies</li>
          <li>I had to learn a lot to complete the linking</li>
        </ul>
      </div>
      <div>
        <h4>Other metrics collected:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>Average task completion time</li>
          <li>Success rate per task</li>
          <li>Average number of errors</li>
          <li>Average number of clicks per flow</li>
        </ul>
    </div>
</div>

___________________________________________
# Results
<ul class="list-disc pl-6 text-gray-700 space-y-2">
  <li>
    <strong>Perceived difficulty:</strong> Participants rated the process as easy, with the experience classified as Category A on the SUS scale — the highest level of usability according to the metric.
  </li>
  <li>
    <strong>Task time:</strong> Users took an average of 3 minutes to complete the registration and connect to the condominium.
  </li>
  <li>
    <strong>Success rate:</strong> 93% of participants completed the process successfully.
  </li>
  <li>
    <strong>Error rate:</strong> The average was 1 error per user, usually related to typing or reading information during the first use.
  </li>
</ul>

## This data reinforces the solution's effectiveness, showing that the new flow addressed both security needs and provided a smooth, intuitive experience for the end user.
