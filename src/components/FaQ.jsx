import React from 'react';

const FaQ = (props) => {
    return (
      <div className="mb-5 p-3 ">
        <div className="container max-w-4xl px-10 py-6 mx-auto ">
          <div className="mt-3">
            <h5>What is Cors?</h5>

            <p className="mt-2">
              As you've possibly already come across by now, CORS is an acronym
              for Cross-Origin Resource Sharing, but what does that actually
              mean? What is CORS? Well, if we go by the Wikipedia definition,
              "[CORS] is a mechanism that allows restricted resources on a web
              page to be requested from another domain outside the domain from
              which the first resource was served," then you'd be forgiven if
              you were more confused than before you'd read that sentence.
              Before we get into defining CORS, it's best to know what came
              before, as it still defines the default behavior and is probably
              why you're reading this now. This precursor to CORS was called the
              "Same-Origin" policy. In short, it dictates that when your browser
              loads a script (like a button handler, or some async widget) from
              a particular (sub)domain that the script can only make requests to
              the (sub)domain that it originated from.
            </p>
          </div>
          <div className=" mt-2 mb-2">
            <p>Read more...</p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <h5>
              Why are you using firebase? And What other options do you have to
              implement authentication?
            </h5>
            <p className="mt-2">
              1. Indeed, Firebase is a less technical and time-saving
              alternative to writing full-fledged backend code for dynamic apps.
              You might also want to consider leveraging this tool if you
              eventually wish to host and manage your app in the cloud. Being
              serverless, Firebase removes the need to worry about the
              technicalities of cloud server configuration. As a Google Cloud
              service, it also gives you access to other Google products and
              features, like Google Drive and Sheets. For instance, you can
              import dummy data from Google Sheets and use it temporarily to
              serve your app. RELATED: The Best Google Sheet Quick Hacks You
              Probably Didn't Know With Firebase, it's pretty simple to connect
              and use built-in third-party authentication providers, including
              Google, Facebook, Twitter, among others. And if you want to use a
              pre-built authentication UI, you have it at your disposal as well.
              All of these can save you a significant amount of development
              cost, as you don't need to pay as high as developing from scratch.
              Firebase pricing is equally flexible. Although there are
              pay-as-you-go services, you can start on a free plan and use
              primary features if your app is still at its prime. Firebase is a
              good choice if you want to deploy a working product on the cloud
              rapidly. Plus, as mentioned, you might want to try it out if you
              need a backend but don't have a backend development background.{" "}
              <br /> <br />
              2. It provides backend services, easy-to-use SDKs, and ready-made
              UI libraries to authenticate users to your app. It supports
              authentication using passwords, phone numbers, popular federated
              identity providers like Google, Firebase Authentication is a tool
              in the User Management and Authentication category of a tech
              stack. TOP ALTERNATIVES TO FIREBASE AUTHENTICATION
              <br />
              Auth0- A set of unified APIs and tools that instantly enables
              Single Sign On and user ...
              <br />
              MongoDB- MongoDB stores data in JSON-like documents that can vary
              in structure, offering ...
              <br />
              Passport- It is authentication middleware for Node.js. Extremely
              flexible and modular, ...
              <br />
              Okta- Connect all your apps in days, not months, with instant
              access to thousands ...
              <br />
              JSON Web Token- JSON Web Token is an open standard that defines a
              compact and self-contained ...
              <br />
              Keycloak- It is an Open Source Identity and Access Management For
              Modern Applications ...
              <br />
              Amazon Cognito- You can create unique identities for your users
              through a number of public login ...
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="mx-2">Read more...</p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <h5>How does the private route work?</h5>
            <p className="mt-2">
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="mx-2">Read more...</p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <h5>What is Node ? How does Node work ?</h5>
            <p className="mt-2">
              1. <br />
              Javascript has existed since 1995 and has since taken over as the
              dominant language for web development. For much of its life,
              JavaScript was used mainly for client-side scripting inside script
              tags executing in web browsers. This limitation meant that
              developers were often working in many different languages and
              frameworks between the front-end (client-side) and backend
              (server-side) aspects of a web application. Although there were
              other projects to bring JavaScript to server-side applications,
              the functionality took off with the launch of Node.js in 2009.
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications. Node.js is written in C,
              C++, and JavaScript, and it is built on the open-source V8
              JavaScript engine which also powers JS in browsers such as Google
              Chrome. As V8 supports new features in JavaScript, they are
              incorporated into Node.
              <br />
              2. <br />
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.js: Node.js
              accepts the request from the clients and sends the response, while
              working with the request node.js handles them with a single
              thread. To operate I/O operations or requests node.js use the
              concept of threads. Thread is a sequence of instructions that the
              server needs to perform. It runs parallel on the server to provide
              the information to multiple clients. Node.js is an event loop
              single-threaded language. It can handle concurrent requests with a
              single thread without blocking it for one request.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="mx-2">Read more...</p>
          </div>
        </div>
      </div>
    );
}

export default FaQ;