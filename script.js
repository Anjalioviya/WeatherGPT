const $ = id => document.getElementById(id);
const words = {
en:{language:"Language",eyebrow:"YOUR EVERYDAY WEATHER ASSISTANT",heading:"What’s the weather like?",subheading:"Search a city, college, landmark, or nearby place.",search:"Search",popular:"Popular places",popularNote:"Place results depend on geocoding coverage.",currentWeather:"CURRENT WEATHER",feelsLike:"Feels like",humidity:"Humidity",wind:"Wind speed",apparent:"Feels like",readWeather:"Read weather aloud",assistantLabel:"WEATHERGPT ASSISTANT",chatTitle:"Ask about the weather",chatHint:"Load a location first. This simple chatbot answers predefined questions using the weather data above.",qTemp:"What is the temperature?",qWind:"Is it windy?",qHumidity:"What is the humidity?",qCondition:"Describe the weather",qRain:"Will it rain today?",qTomorrow:"What about tomorrow?",qHighLow:"Daily high and low?",qUmbrella:"Should I carry an umbrella?",qUV:"What is the UV index?",qSunset:"When is sunset?",chatPlaceholder:"Ask a weather question…",send:"Send",chatWelcome:"Hi! Search for a location to get started.",footer:"Weather data provided by Open-Meteo. No account or API key required.",searching:"Searching for the location…",noLocation:"We couldn’t find that place. Try a nearby city or add the country name.",networkError:"Could not load weather data. Check your internet connection and try again.",voiceUnsupported:"Voice search is not supported in this browser. Try Chrome or Edge, or type the location.",voiceStart:"Listening… say a city or place name.",voiceDenied:"Microphone access was unavailable. Allow microphone permission or type your search.",voiceNotFound:"I didn’t hear a location. Please try again.",noWeather:"Please search for a location first.",tempAnswer:"The current temperature in {place} is {temp}°C.",windCalm:"Wind speed is {wind} km/h, so it is not very windy.",windStrong:"Wind speed is {wind} km/h, so it is quite windy.",humidityAnswer:"Humidity in {place} is {humidity}%.",conditionAnswer:"The weather in {place} is {condition}, with a temperature of {temp}°C.",rainLikely:"There is a {chance}% chance of precipitation today, with about {amount} mm expected. Carry an umbrella if you’ll be outside.",rainUnlikely:"Rain looks unlikely today: {chance}% precipitation chance and about {amount} mm expected.",tomorrowAnswer:"Tomorrow in {place}: {condition}, high {high}°C and low {low}°C, with a {chance}% chance of precipitation.",highLowAnswer:"Today in {place}: high {high}°C and low {low}°C.",umbrellaYes:"An umbrella is a good idea: the forecast shows a {chance}% chance of precipitation and about {amount} mm today.",umbrellaNo:"An umbrella may not be necessary: {chance}% chance of precipitation and about {amount} mm today.",uvAnswer:"Today’s maximum UV index is {uv}.",sunsetAnswer:"Today’s local sunset time is approximately {time}.",fallback:"I can answer questions about temperature, wind, humidity, rain, tomorrow’s forecast, high/low temperature, UV index, and sunset. Try a suggested question.",updated:"Updated just now",weatherClear:"Clear sky",weatherMainlyClear:"Mainly clear",weatherPartlyCloudy:"Partly cloudy",weatherOvercast:"Overcast",weatherFog:"Foggy",weatherDrizzle:"Drizzle",weatherRain:"Rainy",weatherSnow:"Snowy",weatherShowers:"Rain showers",weatherStorm:"Thunderstorm",weatherUnknown:"Current conditions"},
ta:{language:"மொழி",eyebrow:"உங்கள் தினசரி வானிலை உதவியாளர்",heading:"வானிலை எப்படி உள்ளது?",subheading:"நகரம், கல்லூரி அல்லது அருகிலுள்ள இடத்தைத் தேடுங்கள்.",search:"தேடு",popular:"பிரபலமான இடங்கள்",popularNote:"முடிவுகள் இடத் தேடல் சேவையைப் பொறுத்தது.",currentWeather:"தற்போதைய வானிலை",feelsLike:"உணரப்படும் வெப்பநிலை",humidity:"ஈரப்பதம்",wind:"காற்றின் வேகம்",apparent:"உணரப்படும் வெப்பநிலை",readWeather:"வானிலையை ஒலியாகக் கேள்",assistantLabel:"வெதர்ஜிபிடி உதவியாளர்",chatTitle:"வானிலை பற்றி கேளுங்கள்",chatHint:"முதலில் ஓர் இடத்தைத் தேடுங்கள். இந்த எளிய உதவியாளர் மேலுள்ள வானிலைத் தரவைப் பயன்படுத்தும்.",qTemp:"வெப்பநிலை என்ன?",qWind:"காற்று அதிகமாக உள்ளதா?",qHumidity:"ஈரப்பதம் என்ன?",qCondition:"வானிலையை விவரி",qRain:"இன்று மழை பெய்யுமா?",qTomorrow:"நாளைய வானிலை எப்படி?",qHighLow:"இன்றைய அதிக / குறைந்த வெப்பநிலை?",qUmbrella:"குடை எடுத்துச் செல்லலாமா?",qUV:"UV குறியீடு என்ன?",qSunset:"சூரியன் எப்போது மறையும்?",chatPlaceholder:"வானிலை கேள்வியைக் கேளுங்கள்…",send:"அனுப்பு",chatWelcome:"வணக்கம்! தொடங்க ஓர் இடத்தைத் தேடுங்கள்.",footer:"Open-Meteo வழங்கும் வானிலைத் தரவு. கணக்கு அல்லது API விசை தேவையில்லை.",searching:"இடத்தைத் தேடுகிறது…",noLocation:"அந்த இடத்தைக் கண்டுபிடிக்க முடியவில்லை. அருகிலுள்ள நகரத்தை முயற்சிக்கவும்.",networkError:"வானிலைத் தரவைப் பெற முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",voiceUnsupported:"இந்த உலாவியில் குரல் தேடல் இல்லை. Chrome அல்லது Edge பயன்படுத்தவும் அல்லது தட்டச்சு செய்யவும்.",voiceStart:"கேட்கிறது… இடத்தின் பெயரைச் சொல்லுங்கள்.",voiceDenied:"மைக்ரோஃபோன் அனுமதி இல்லை. அனுமதிக்கவும் அல்லது தட்டச்சு செய்யவும்.",voiceNotFound:"இடத்தின் பெயர் கேட்கவில்லை. மீண்டும் முயற்சிக்கவும்.",noWeather:"முதலில் ஓர் இடத்தைத் தேடுங்கள்.",tempAnswer:"{place} இடத்தின் தற்போதைய வெப்பநிலை {temp}°C.",windCalm:"காற்றின் வேகம் {wind} கிமீ/மணி; அதிக காற்றில்லை.",windStrong:"காற்றின் வேகம் {wind} கிமீ/மணி; காற்று அதிகமாக உள்ளது.",humidityAnswer:"{place} இடத்தின் ஈரப்பதம் {humidity}%.",conditionAnswer:"{place} இடத்தில் {condition}; வெப்பநிலை {temp}°C.",rainLikely:"இன்று மழை பெய்ய {chance}% வாய்ப்பு உள்ளது; சுமார் {amount} மிமீ மழை எதிர்பார்க்கப்படுகிறது. வெளியே சென்றால் குடை எடுத்துச் செல்லுங்கள்.",rainUnlikely:"இன்று மழை வாய்ப்பு குறைவு: மழைக்கான வாய்ப்பு {chance}%, எதிர்பார்க்கப்படும் அளவு {amount} மிமீ.",tomorrowAnswer:"{place} நாளைய வானிலை: {condition}; அதிகபட்சம் {high}°C, குறைந்தபட்சம் {low}°C; மழை வாய்ப்பு {chance}%.",highLowAnswer:"{place} இன்றைய முன்னறிவிப்பு: அதிகபட்சம் {high}°C, குறைந்தபட்சம் {low}°C.",umbrellaYes:"இன்று குடை எடுத்துச் செல்வது நல்லது. மழை வாய்ப்பு {chance}%, எதிர்பார்க்கப்படும் அளவு {amount} மிமீ.",umbrellaNo:"இன்றைய முன்னறிவிப்பின்படி குடை தேவையில்லாமல் இருக்கலாம்: மழை வாய்ப்பு {chance}%, அளவு {amount} மிமீ.",uvAnswer:"இன்றைய அதிகபட்ச UV குறியீடு {uv}.",sunsetAnswer:"இன்றைய உள்ளூர் சூரிய அஸ்தமன நேரம் சுமார் {time}.",fallback:"வெப்பநிலை, காற்று, ஈரப்பதம், மழை, நாளைய வானிலை, அதிக/குறைந்த வெப்பநிலை, UV மற்றும் சூரிய அஸ்தமனம் பற்றி கேளுங்கள்.",updated:"இப்போது புதுப்பிக்கப்பட்டது",weatherClear:"வானம் தெளிவு",weatherMainlyClear:"பெரும்பாலும் தெளிவு",weatherPartlyCloudy:"ஓரளவு மேகமூட்டம்",weatherOvercast:"முழு மேகமூட்டம்",weatherFog:"மூடுபனி",weatherDrizzle:"சிறு தூறல்",weatherRain:"மழை",weatherSnow:"பனிப்பொழிவு",weatherShowers:"மழைச் சாரல்",weatherStorm:"இடியுடன் கூடிய மழை",weatherUnknown:"தற்போதைய நிலை"},
hi:{language:"भाषा",eyebrow:"आपका रोज़ाना मौसम सहायक",heading:"मौसम कैसा है?",subheading:"शहर, कॉलेज या पास की जगह खोजें।",search:"खोजें",popular:"लोकप्रिय स्थान",popularNote:"परिणाम स्थान खोज सेवा पर निर्भर करते हैं।",currentWeather:"वर्तमान मौसम",feelsLike:"महसूस होने वाला तापमान",humidity:"नमी",wind:"हवा की गति",apparent:"महसूस होने वाला तापमान",readWeather:"मौसम सुनें",assistantLabel:"WEATHERGPT सहायक",chatTitle:"मौसम के बारे में पूछें",chatHint:"पहले कोई स्थान खोजें। यह सरल चैटबॉट ऊपर के मौसम डेटा से जवाब देता है।",qTemp:"तापमान कितना है?",qWind:"क्या हवा तेज़ है?",qHumidity:"नमी कितनी है?",qCondition:"मौसम बताएं",qRain:"क्या आज बारिश होगी?",qTomorrow:"कल मौसम कैसा रहेगा?",qHighLow:"आज का अधिकतम और न्यूनतम तापमान?",qUmbrella:"क्या छाता ले जाना चाहिए?",qUV:"UV इंडेक्स कितना है?",qSunset:"सूर्यास्त कब होगा?",chatPlaceholder:"मौसम से जुड़ा सवाल पूछें…",send:"भेजें",chatWelcome:"नमस्ते! शुरू करने के लिए कोई स्थान खोजें।",footer:"Open-Meteo द्वारा मौसम डेटा। खाता या API कुंजी आवश्यक नहीं है।",searching:"स्थान खोजा जा रहा है…",noLocation:"यह स्थान नहीं मिला। पास का शहर या देश का नाम जोड़कर देखें।",networkError:"मौसम डेटा लोड नहीं हुआ। इंटरनेट जाँचकर फिर प्रयास करें।",voiceUnsupported:"इस ब्राउज़र में आवाज़ से खोज उपलब्ध नहीं है। Chrome या Edge आज़माएँ या टाइप करें।",voiceStart:"सुन रहा है… स्थान का नाम बोलें।",voiceDenied:"माइक्रोफ़ोन अनुमति उपलब्ध नहीं है। अनुमति दें या टाइप करें।",voiceNotFound:"स्थान का नाम सुनाई नहीं दिया। फिर प्रयास करें।",noWeather:"पहले कोई स्थान खोजें।",tempAnswer:"{place} में वर्तमान तापमान {temp}°C है।",windCalm:"हवा की गति {wind} किमी/घंटा है, हवा बहुत तेज़ नहीं है।",windStrong:"हवा की गति {wind} किमी/घंटा है, हवा तेज़ है।",humidityAnswer:"{place} में नमी {humidity}% है।",conditionAnswer:"{place} में मौसम {condition} है और तापमान {temp}°C है।",rainLikely:"आज बारिश की {chance}% संभावना है और लगभग {amount} मिमी वर्षा हो सकती है। बाहर जा रहे हैं तो छाता रखें।",rainUnlikely:"आज बारिश की संभावना कम है: {chance}% संभावना और लगभग {amount} मिमी वर्षा।",tomorrowAnswer:"{place} में कल: {condition}, अधिकतम {high}°C और न्यूनतम {low}°C; बारिश की संभावना {chance}% है।",highLowAnswer:"{place} के लिए आज का पूर्वानुमान: अधिकतम {high}°C और न्यूनतम {low}°C।",umbrellaYes:"आज छाता रखना अच्छा रहेगा: बारिश की {chance}% संभावना और लगभग {amount} मिमी वर्षा हो सकती है।",umbrellaNo:"पूर्वानुमान के अनुसार आज छाते की ज़रूरत शायद नहीं: बारिश की {chance}% संभावना और लगभग {amount} मिमी वर्षा।",uvAnswer:"आज का अधिकतम UV इंडेक्स {uv} है।",sunsetAnswer:"आज स्थानीय सूर्यास्त का समय लगभग {time} है।",fallback:"मैं तापमान, हवा, नमी, बारिश, कल का मौसम, अधिकतम/न्यूनतम तापमान, UV इंडेक्स और सूर्यास्त बता सकता हूँ।",updated:"अभी अपडेट किया गया",weatherClear:"साफ़ आसमान",weatherMainlyClear:"अधिकतर साफ़",weatherPartlyCloudy:"आंशिक बादल",weatherOvercast:"बादल छाए हुए",weatherFog:"कोहरा",weatherDrizzle:"हल्की बूंदाबांदी",weatherRain:"बारिश",weatherSnow:"बर्फ़बारी",weatherShowers:"बारिश की बौछारें",weatherStorm:"गरज के साथ तूफ़ान",weatherUnknown:"वर्तमान स्थिति"}
};
let lang="en", current=null;
const t=k=>words[lang][k]||words.en[k]||k;
const format=(s,v)=>s.replace(/\{(\w+)\}/g,(_,k)=>v[k]??"");
function status(msg,ok=false){$("statusMessage").textContent=msg;$("statusMessage").classList.toggle("success",ok);}
function applyLanguage(){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
 $("locationInput").placeholder=lang==="ta"?"சென்னை அல்லது Saveetha University எனத் தேடுங்கள்":lang==="hi"?"चेन्नई या Saveetha University खोजें":"Try Chennai or Saveetha University";
 if(current) render(current);
}
$("languageSelect").addEventListener("change",e=>{lang=e.target.value;applyLanguage();});
const codes={0:["weatherClear","☀️"],1:["weatherMainlyClear","🌤️"],2:["weatherPartlyCloudy","⛅"],3:["weatherOvercast","☁️"],45:["weatherFog","🌫️"],48:["weatherFog","🌫️"],51:["weatherDrizzle","🌦️"],53:["weatherDrizzle","🌦️"],55:["weatherDrizzle","🌧️"],56:["weatherDrizzle","🌧️"],57:["weatherDrizzle","🌧️"],61:["weatherRain","🌧️"],63:["weatherRain","🌧️"],65:["weatherRain","🌧️"],66:["weatherRain","🌧️"],67:["weatherRain","🌧️"],71:["weatherSnow","🌨️"],73:["weatherSnow","❄️"],75:["weatherSnow","❄️"],77:["weatherSnow","🌨️"],80:["weatherShowers","🌦️"],81:["weatherShowers","🌧️"],82:["weatherShowers","🌧️"],85:["weatherSnow","🌨️"],86:["weatherSnow","🌨️"],95:["weatherStorm","⛈️"],96:["weatherStorm","⛈️"],99:["weatherStorm","⛈️"]};
// Saved coordinates make college shortcuts work even when a geocoding provider
// does not index the institution name. Coordinates represent the campus area.
const CAMPUS_PRESETS = [
 {name:"Saveetha University", admin:"Thandalam, Chennai, Tamil Nadu, India", lat:13.0109, lon:80.0067, aliases:["saveetha","saveetha university","saveetha engineering college"]},
 {name:"Anna University", admin:"Guindy, Chennai, Tamil Nadu, India", lat:13.0108, lon:80.2355, aliases:["anna university","anna university chennai"]},
 {name:"IIT Madras", admin:"Adyar, Chennai, Tamil Nadu, India", lat:12.9915, lon:80.2337, aliases:["iit madras","indian institute of technology madras"]},
 {name:"SRM Institute of Science and Technology", admin:"Kattankulathur, Chengalpattu, Tamil Nadu, India", lat:12.8231, lon:80.0444, aliases:["srm","srm university","srm kattankulathur","srm institute of science and technology"]},
 {name:"VIT Vellore", admin:"Katpadi, Vellore, Tamil Nadu, India", lat:12.9692, lon:79.1559, aliases:["vit vellore","vellore institute of technology"]},
 {name:"PSG College of Technology", admin:"Peelamedu, Coimbatore, Tamil Nadu, India", lat:11.0246, lon:77.0066, aliases:["psg tech","psg college of technology","psg college"]},
 {name:"Thiagarajar College of Engineering", admin:"Thiruparankundram, Madurai, Tamil Nadu, India", lat:9.8833, lon:78.0804, aliases:["thiagarajar college","thiagarajar college of engineering","tce madurai"]},
 {name:"National Institute of Technology Tiruchirappalli", admin:"Thuvakudi, Tiruchirappalli, Tamil Nadu, India", lat:10.7590, lon:78.8132, aliases:["nit trichy","nit tiruchirappalli","national institute of technology tiruchirappalli"]},
 {name:"Sathyabama Institute of Science and Technology", admin:"Sholinganallur, Chennai, Tamil Nadu, India", lat:12.8720, lon:80.2215, aliases:["sathyabama","sathyabama university","sathyabama institute of science and technology"]},
 {name:"SSN College of Engineering", admin:"Kalavakkam, Chengalpattu, Tamil Nadu, India", lat:12.7516, lon:80.1952, aliases:["ssn college","ssn college of engineering","ssnce","sri sivasubramaniya nadar college of engineering"]},
 {name:"St Joseph's Institute of Technology", admin:"OMR, Chennai, Tamil Nadu, India", lat:12.8720, lon:80.2190, aliases:["st joseph's it","st josephs it","st joseph's institute of technology","st josephs institute of technology"]}
];
function findCampusPreset(query) {
 const q=query.toLocaleLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 return CAMPUS_PRESETS.find(p=>p.aliases.some(a=>{
   const alias=a.toLocaleLowerCase().replace(/[^a-z0-9]+/g," ").trim();
   return q===alias || q.includes(alias);
 }));
}
async function searchLocation(query){
 query=query.trim();if(!query)return;status(t("searching"));$("searchButton").disabled=true;
 try{
  let location;
  const campus=findCampusPreset(query);
  if(campus){
    location={name:campus.name,admin1:campus.admin,country:"India",latitude:campus.lat,longitude:campus.lon};
  }else{
    const gu=new URL("https://geocoding-api.open-meteo.com/v1/search");gu.search=new URLSearchParams({name:query,count:"10",language:lang,format:"json"});
    const gr=await fetch(gu);if(!gr.ok)throw Error("geocoding");const gd=await gr.json();const results=gd.results||[];
    if(!results.length){status(t("noLocation"));return;}
    const q=query.toLocaleLowerCase();
    location=results.find(x=>`${x.name}, ${x.admin1||""}, ${x.country||""}`.toLocaleLowerCase().includes(q))||results.find(x=>x.name.toLocaleLowerCase()===q)||results[0];
  }
  const wu=new URL("https://api.open-meteo.com/v1/forecast");wu.search=new URLSearchParams({latitude:location.latitude,longitude:location.longitude,current:"temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m",daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,uv_index_max,sunrise,sunset",forecast_days:"2",timezone:"auto"});
  const wr=await fetch(wu);if(!wr.ok)throw Error("weather");const wd=await wr.json();if(!wd.current)throw Error("weather");
  current={place:location.name,admin:[location.admin1,location.country].filter(Boolean).join(", "),lat:location.latitude,lon:location.longitude,temp:Math.round(wd.current.temperature_2m),feels:Math.round(wd.current.apparent_temperature),humidity:wd.current.relative_humidity_2m,wind:Math.round(wd.current.wind_speed_10m),code:wd.current.weather_code,isDay:wd.current.is_day,daily:wd.daily};
  render(current);$("weatherSection").classList.remove("hidden");$("chatResponse").textContent=t("chatWelcome");status(`${location.name} — ${t("updated")}`,true);
 }catch(e){console.error(e);status(t("networkError"));}finally{$("searchButton").disabled=false;}
}
function render(d){
 const c=codes[d.code]||["weatherUnknown",d.isDay?"🌤️":"🌙"];
 $("placeName").textContent=d.place;$("placeMeta").textContent=d.admin||`${d.lat.toFixed(2)}, ${d.lon.toFixed(2)}`;
 $("temperature").textContent=d.temp;$("feelsLike").textContent=`${d.feels}°C`;$("apparentTemp").textContent=`${d.feels}°C`;
 $("humidity").textContent=`${d.humidity}%`;$("windSpeed").textContent=`${d.wind} km/h`;$("weatherDescription").textContent=t(c[0]);$("weatherEmoji").textContent=c[1];$("updatedAt").textContent=t("updated");
}
$("searchForm").addEventListener("submit",e=>{e.preventDefault();searchLocation($("locationInput").value);});
document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{$("locationInput").value=b.dataset.place;searchLocation(b.dataset.place);}));
function answer(q){
 if(!current)return t("noWeather");
 q=q.toLocaleLowerCase();
 const has=a=>a.some(x=>q.includes(x)), d=current.daily;
 const chance=Number(d?.precipitation_probability_max?.[0] ?? 0);
 const amount=Number(d?.precipitation_sum?.[0] ?? 0);
 const tomorrowChance=Number(d?.precipitation_probability_max?.[1] ?? 0);
 const high=Math.round(d?.temperature_2m_max?.[0] ?? current.temp);
 const low=Math.round(d?.temperature_2m_min?.[0] ?? current.temp);
 const tomorrowCode=d?.weather_code?.[1], tomorrowCond=t((codes[tomorrowCode]||["weatherUnknown"])[0]);
 const isTomorrow=has(["tomorrow","next day","நாளை","நாளைய","कल","कल का"]);
 const isRain=has(["rain","raining","rainy","precipitation","shower","umbrella","மழை","குடை","बारिश","वर्षा","छाता"]);
 const isHighLow=has(["high and low","maximum","minimum","max temp","min temp","high low","அதிகபட்ச","குறைந்தபட்ச","அதிக வெப்ப","குறைந்த வெப்ப","अधिकतम","न्यूनतम"]);
 const isUV=has(["uv","ultraviolet","sun index","uv குறியீடு","यूवी"]);
 const isSunset=has(["sunset","sun set","சூரியன் மறை","சூரிய அஸ்தமனம்","सूर्यास्त"]);
 if(isTomorrow)return format(t("tomorrowAnswer"),{place:current.place,condition:tomorrowCond,high:Math.round(d?.temperature_2m_max?.[1]??current.temp),low:Math.round(d?.temperature_2m_min?.[1]??current.temp),chance:tomorrowChance});
 if(isHighLow)return format(t("highLowAnswer"),{place:current.place,high,low});
 if(isUV)return format(t("uvAnswer"),{uv:d?.uv_index_max?.[0]==null?"unavailable":Math.round(d.uv_index_max[0]*10)/10});
 if(isSunset){
  const value=d?.sunset?.[0];
  const time=value?new Date(value).toLocaleTimeString({en:"en-IN",ta:"ta-IN",hi:"hi-IN"}[lang],{hour:"numeric",minute:"2-digit",hour12:true}):"unavailable";
  return format(t("sunsetAnswer"),{time});
 }
 if(isRain){
  const umbrella=has(["umbrella","குடை","छाता"]), likely=chance>=30||amount>=1;
  return format(t(umbrella?(likely?"umbrellaYes":"umbrellaNo"):(likely?"rainLikely":"rainUnlikely")),{chance,amount:Math.round(amount*10)/10});
 }
 if(has(["temperature","hot","cold","வெப்ப","சூடு","குளிர்","तापमान","गर्मी","ठंड"]))return format(t("tempAnswer"),{place:current.place,temp:current.temp});
 if(has(["wind","windy","காற்று","हवा"]))return format(t(current.wind>=25?"windStrong":"windCalm"),{wind:current.wind});
 if(has(["humidity","humid","ஈரப்பத","नमी"]))return format(t("humidityAnswer"),{place:current.place,humidity:current.humidity});
 if(has(["weather","condition","cloud","வானிலை","மேகம்","मौसम","बादल"])){const c=codes[current.code]||["weatherUnknown"];return format(t("conditionAnswer"),{place:current.place,condition:t(c[0]),temp:current.temp});}
 return t("fallback");
}
$("chatForm").addEventListener("submit",e=>{e.preventDefault();const q=$("chatInput").value.trim();if(q)$("chatResponse").textContent=answer(q);$("chatInput").value="";});
const suggestedPrompts={temperature:"temperature",wind:"wind",humidity:"humidity",condition:"weather",rainToday:"Will it rain today?",tomorrow:"What will the weather be tomorrow?",highLow:"What are today high and low temperatures?",umbrella:"Should I carry an umbrella today?",uv:"What is today UV index?",sunset:"What time is sunset today?"};
document.querySelectorAll(".question-chip").forEach(b=>b.addEventListener("click",()=>{$("chatResponse").textContent=answer(suggestedPrompts[b.dataset.question]||b.dataset.question);}));
function speak(text){
 if(!("speechSynthesis"in window)){status("Text-to-speech is not supported in this browser.");return;}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang={en:"en-IN",ta:"ta-IN",hi:"hi-IN"}[lang];u.rate=.95;speechSynthesis.speak(u);
}
$("speakWeatherButton").addEventListener("click",()=>{if(!current){status(t("noWeather"));return;}const c=codes[current.code]||["weatherUnknown"];speak(format(t("conditionAnswer"),{place:current.place,condition:t(c[0]),temp:current.temp})+" "+format(t("humidityAnswer"),{place:current.place,humidity:current.humidity}));});
$("voiceButton").addEventListener("click",()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){status(t("voiceUnsupported"));return;}
 const r=new SR();r.lang={en:"en-IN",ta:"ta-IN",hi:"hi-IN"}[lang];r.interimResults=false;r.maxAlternatives=1;status(t("voiceStart"));
 r.onresult=e=>{const q=e.results[0][0].transcript;$("locationInput").value=q;searchLocation(q);};
 r.onerror=e=>status(["not-allowed","service-not-allowed"].includes(e.error)?t("voiceDenied"):t("voiceNotFound"));r.onnomatch=()=>status(t("voiceNotFound"));r.start();
});
applyLanguage();
