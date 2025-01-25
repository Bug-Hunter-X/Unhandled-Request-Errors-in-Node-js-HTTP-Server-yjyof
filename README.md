# Unhandled Request Errors in Node.js HTTP Server

This repository demonstrates a common, yet often overlooked, error in Node.js HTTP servers: the lack of proper error handling for unexpected request failures.  The provided `bug.js` file shows a basic server that is susceptible to these issues.  The `bugSolution.js` file provides a corrected version with robust error handling.

## Problem

The `bug.js` server starts and responds to requests correctly. However, it doesn't handle errors gracefully if a request encounters a problem (e.g., network interruption, server shutdown). This can leave clients hanging or result in unexpected behavior. 

## Solution

The `bugSolution.js` file adds error handling using the `server.on('error', ...)` event listener. This ensures that the server handles unexpected errors and prevents unexpected crashes or unresponsive behavior.