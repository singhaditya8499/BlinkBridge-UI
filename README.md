## Inspiration
We firmly believe that technology can serve as a tool to enhance accessibility and improve the quality of life. The pandemic highlighted the difficulties faced by students who require specialized accommodations for their education, as well as the challenges faced by elderly individuals, those with paralysis or other disabilities, in adapting to the new normal. Having personally witnessed the struggles of those with disabilities in their daily lives, we were inspired to create a solution. If we just talk about the education domain, in the US alone, there are 7 million children who require tailored accommodations to receive a formal education. Additionally, according to the CDC, one in four adults suffers from some form of disability. It is crucial for us to create an environment of inclusiveness that makes resources accessible to everyone, empowering each individual with a sense of independence. With this mission in mind, we set out to develop BlinkBridge.

## What it does


BlinkBridge is an innovative assistive technology that leverages facial landmarks to translate blinks into digital signals. These signals can be customized to perform specific actions, helping individuals with special needs or disabilities to carry out daily tasks more easily. By detecting voluntary facial landmark changes, particularly the probability of eyes being open or closed, BlinkBridge can be tailored to different types of actions by varying parameters such as frames per second (FPS) and time between blinks. Furthermore, eye movements can be mapped to Morse code, providing an even wider range of possible actions. Each voluntary eye pattern is stored in a high-volume database that is accessed in real time by multiple consuming systems. These systems can define their own actions based on the patterns observed. Blinking is one of the least energy-consuming voluntary actions, making it an accessible and efficient way for older adults, individuals with disabilities, and children to perform tasks independently.

## How we built it
![Text](https://github.com/singhaditya8499/Education-for-all/raw/mainline/app/src/main/res/images/educationForAll.jpg)

We made an app that acts as a sensor and a portable processing unit. We created a web app which is our consuming device as mentioned in the flow diagram above. We used firebase as our high volume DB where values were updated by our app and it was fetched dynamically by our web app performing the action of a video player.

Detailed steps are given below:

1. Users provide input by using a sensor, which in this case is a camera. The camera captures data and sends it to the system for processing.
2. The data is received by the backend system, which could be on the user's mobile device or on a remote server. The data is processed to extract meaningful information.
3. The processed data is sent to an asynchronous system that continuously monitors the data and takes appropriate actions based on the information received. The system also keeps track of other parameters that might affect the flow of information.
4. The system stores the data in low-traffic databases to analyze user patterns and improve the system's performance over time.
5. The output of the processed information is stored in high-traffic databases that are continuously monitored by multiple devices.
6. The devices scan the high-traffic databases to extract relevant information and take actions based on that information.
7. The system updates the information based on the actions taken, which in turn triggers further processing of the data to provide updated and relevant information.

## Challenges we ran into
1. To convert the eye blinks to digital signals we are using the blink count in a given time interval. Determining the value of this time interval is challenging since the speed of blinking may vary from user to user. It's essential to use the appropriate threshold to make the overall user experience better. We plotted the curve for FPS vs blinking time interval. Based on our assumption we were able to solve it for the limited users we tested upon.
2. The app processes eye blink signals in real-time to control video streaming. Therefore, the app's performance, especially its speed, and efficiency, is critical to ensure that there are no delays or lags. We wrote the most optimum code, taking care of any code leaks, deprecated objects, etc.
3. The app required integration with backend technologies, such as Google Vision APIs, Firebase, and Python to store and process the data generated by eye blinks accurately. Some of the things were new for us, and understanding them as well as implementing them in such a short time was challenging.

## Accomplishments that we're proud of
Nowadays, disability is prevalent and it often makes it challenging for individuals to carry out their routine tasks. One of the many tasks is watching videos, as individuals with disabilities may struggle to manipulate video controls such as play, pause, and rewind. This application empowers disabled individuals to control video streaming and access information, making it easier for them to perform this basic activity. Due to its plug-and-play model, it can be extended to any other use case too. Furthermore, this project allowed us to work with diverse technologies, providing us with a valuable learning experience and some immemorable moments.

## What we learned
1. Accessibility: The app has the potential to make a significant impact on disabled people's lives. Through this project, we have gained a deeper understanding of thinking from the user's perspective and working backward, starting with solving their pain points first.
2. Real work application of tech stack:  We faced real-world challenges, such as managing data privacy and security, handling errors, and optimizing app performance. These challenges provided opportunities to learn and develop critical problem-solving skills which will be useful in our future careers too.
3. User experience design: Building an app that is useful for the differently abled requires careful consideration of user experience design. We learned how to create an intuitive and accessible interface that allows users to navigate and use the app with ease with the bare minimum support.

## What's next for BlinkBridge
1. Calculating the number of blinks is an essential factor, and determining the time interval for the same is crucial. As the user base increases and more data is collected, implementing machine learning techniques can help predict the optimal time interval for blink calculation accurately. This can help in enhancing the overall user experience and the functionality of the system.
2. In the future additional eye movements can be included to offer users more features in controlling the video player. These eye movements can provide more data points for analysis, and the system can use them to make more precise predictions.
3. We will work towards making the application more user-friendly, and easily accessible and will help people with all kinds of disabilities. We already have a working script for detecting hand movements, and we are discussing it.
4. Making it an end-to-end application solution for the differently abled, running as a single self-sufficient and self-help tool that will be powerful enough to solve any kind of problem.
