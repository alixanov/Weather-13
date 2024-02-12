const KEY = "70740843ba0d2ad5e42385ab8ab3e0ce";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const requst = `?q=${city}&units=metric&appid=${KEY}`;
    console.log('Loading...');
    loader(true)
  const req = await fetch(base + requst);
    const data = await req.json();
    console.log(data);
    console.log('Finished !!!');
loader(false)
  return data;
};



