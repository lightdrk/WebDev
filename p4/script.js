function clicks(){
    window.location.replace("https://accounts.google.com/signin/v2/challenge/pwd?TL=AJvNCbYp1v1WFE7ZdaMWAG6YlYmxl8gOvXzsgbleQYkhIunoqbQMR9U41tJt3H-u&cid=2&continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fphone-sign-in&flowName=GlifWebSignIn&ifkv=AeDOFXjjgJEC9C6n8k1lZoUKD1C1LAnPdbwKwGLBZi93aBoR1A9rpO5r72Bxj3i_WDnOBcIUlzo74A&rart=ANgoxcfVr8-CgG8QGql0CvsCmtV9HlsFI09W1WOOqVRYYu8w0HG1stoY2qG6qvhVXR4Ejfo7tixlfqf7FZQA51muZte8ukpJMw&sarp=1&scc=1&service=accountsettings&flowEntry=ServiceLogin");
}

const buttonPress = document.getElementById("signUp");
buttonPress.addEventListener("click",clicks);