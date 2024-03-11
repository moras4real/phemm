let baseUrl;

if (process.env.NODE_ENV === "production") {
    // baseUrl = "https://phem.vercel.app";
    baseUrl = "https://phem-3.onrender.com/";
} else {
    baseUrl =     "http:/localhost:4000"
}

export default baseUrl;