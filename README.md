# Shortster - Client

### Github Repository:
https://github.com/rixong/shortster-spa

## Installation:
Clone the folder locally from GitHub and install dependencies.
```
npm install
npm start
```
You will also need to install and run [Shorster API](https://github.com/rixong/shortster-api) on the same machine.

## Instructions:
CREATING A Short URL:
1. Navigate to Root URL (localhost:3001/) to display the form.
2. Copy and Paste desired long URL from a website into the 'Long URL' field.
3. Optionally enter a short URL (4 or more characters, only letters and numbers) into the 'short URL' field. 
4. If you do not enter a short URL one will be generated for you.
5. Submit the request to display your new short URL.

NAVIGATING to the URL using your short URL:
1. Append your short URL to the Root URL (localhost:3001/myShortUrl) and submit.
2. You will be redirected to the original page, if the URL is valid.

VIEWING Stats:
1. Append '/stats' to the short URL to view statistics (localhost:3001/myShortUrl/stats).


## Assumptions:
A 'longURL' refers to an existing URL. My first version I had the shortURL refer to a fictitious pathname, as if we were redirecting to a URL within the local domain, but decided it made more sense have the shortURLs link to real URLS in the wild.

## Technology:
* React v.17.0.1
* Luxon v.1.2.5 (TimeDate formatting)