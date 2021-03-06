import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Space.com"
    //         },
    //         "author": "Elizabeth Howell",
    //         "title": "A Cygnus cargo spacecraft is launching to orbit today. Here's how to watch live. - Space.com",
    //         "description": "Liftoff is scheduled for 12:39 p.m. EST (1739 GMT).",
    //         "url": "https://www.space.com/space-station-cygnus-ng-17-cargo-ship-launch",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/QVKLr4YaWTXkvBehjiT7mZ-1200-80.jpg",
    //         "publishedAt": "2022-02-19T12:22:13Z",
    //         "content": "A private Cygnus freighter is set to launch on a resupply mission to the International Space Station (ISS) on Saturday (Feb. 19), and you can watch the whole thing live.\r\nLaunch coverage is scheduledâ€¦ [+5337 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Free Press Journal"
    //         },
    //         "author": "IANS",
    //         "title": "Mental health crisis worse during COVID-19, suggests US Centers for Disease Control and Prevention - Free Press Journal",
    //         "description": "Mental health crisis worse during COVID-19, suggests US Centers for Disease Control and Prevention",
    //         "url": "https://www.freepressjournal.in/lifestyle/mental-health-crisis-worse-during-covid-19-suggests-us-centers-for-disease-control-and-prevention",
    //         "urlToImage": "https://images.assettype.com/freepressjournal/2022-02/f85af90f-c9f2-4505-a3d2-cf663c5759b7/download.webp?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
    //         "publishedAt": "2022-02-19T12:14:30Z",
    //         "content": "Washington: American children's mental health crisis has gotten worse during the Covid-19 pandemic, according to two new studies published by the US Centers for Disease Control and Prevention (CDC).\râ€¦ [+1381 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": "NDTV Sports Desk",
    //         "title": "Cheteshwar Pujara, Ajinkya Rahane Dropped From India's Test Squad For Sri Lanka Series | Cricket News - NDTVSports.com",
    //         "description": "Out-of-form India batters Cheteshwar Pujara and Ajinkya Rahane have both been dropped from India's squad for the upcoming Test series against Sri Lanka.",
    //         "url": "https://sports.ndtv.com/india-vs-sri-lanka-2022/cheteshwar-pujara-ajinkya-rahane-dropped-from-indias-test-squad-for-sri-lanka-series-2777510",
    //         "urlToImage": "https://c.ndtvimg.com/2021-01/t48c39fg_rahane-pujara-afp_650x400_11_January_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    //         "publishedAt": "2022-02-19T11:34:00Z",
    //         "content": "Out-of-form India batters Cheteshwar Pujara and Ajinkya Rahane have both been dropped from India's squad for the upcoming Test series against Sri Lanka. Both veteran batters have been going through aâ€¦ [+1625 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Thehansindia.com"
    //         },
    //         "author": "Kahekashan",
    //         "title": "PUBG New State Mobile announces Mileage System; How to win and use Mileage Points - The Hans India",
    //         "description": "PUBG New State Mobile has announced the Mileage System under which players can earn Mileage Points...",
    //         "url": "https://www.thehansindia.com/technology/tech-news/pubg-new-state-mobile-announces-mileage-system-how-to-win-and-use-mileage-points-729978",
    //         "urlToImage": "https://assets.thehansindia.com/h-upload/2022/02/19/1277720-pubg-new-state.jpg",
    //         "publishedAt": "2022-02-19T10:49:12Z",
    //         "content": "PUBG New State, which recently changed its name to just New State Mobile, has gained immense popularity among gamers globally in a short time. After the ban of Garena Free Fire in India, New State Moâ€¦ [+2225 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Abplive.com"
    //         },
    //         "author": "ABP News Bureau",
    //         "title": "UP Government Lifts Night Curfew After Decline In Covid-19 Cases - ABP Live",
    //         "description": "The government of Uttar Pradesh has lifted night curfew in the state following the decline in Covid-19 cases.",
    //         "url": "https://news.abplive.com/states/up-uk/breaking-up-government-lifts-night-curfew-after-decline-in-covid-19-cases-1514119",
    //         "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/02/19/7589e290b58825bce2ff3b617ec34df5_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
    //         "publishedAt": "2022-02-19T10:06:54Z",
    //         "content": "New Delhi: The government of Uttar Pradesh has lifted the night curfew in the state following the decline in Covid-19 cases, news agency ANI reported. \r\nAwanish Kumar Awasthi, who is Additional Chiefâ€¦ [+1370 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "HT Entertainment Desk",
    //         "title": "Farhan Akhtar and Shibani Dandekar wedding live updates: Bride and groom seen in first pic, Hrithik Roshan dances - Hindustan Times",
    //         "description": "Farhan Akhtar and Shibani Dandekar wedding live updates: The long-time couple is all set to get married at his parents' house in Khandala.",
    //         "url": "https://www.hindustantimes.com/entertainment/bollywood/farhan-akhtar-and-shibani-dandekar-wedding-live-updates-actors-to-tie-the-knot-in-khandala-guests-start-arriving-101645251144516.html",
    //         "urlToImage": "https://images.hindustantimes.com/img/2022/02/19/1600x900/farhan_shibani_wedding_1645262188830_1645262189039.jpeg",
    //         "publishedAt": "2022-02-19T09:59:10Z",
    //         "content": "Actor-filmmaker Farhan Akhtar and his girlfriend, actor-singer Shibani Dandekar are all set to get married. The couple is tying the knot in Khandala at his parents Javed Akhtar and Shabana Azmi's homâ€¦ [+2175 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Thehansindia.com"
    //         },
    //         "author": "Kahekashan",
    //         "title": "NASAs Perseverance completes 1st year on Mars - The Hans India",
    //         "description": "NASAs Perseverance rover has successfully completed the first year since touching down on Mars on...",
    //         "url": "https://www.thehansindia.com/technology/tech-news/nasas-perseverance-completes-1st-year-on-mars-729974",
    //         "urlToImage": "https://assets.thehansindia.com/h-upload/2022/02/19/1277709-nasa.jpg",
    //         "publishedAt": "2022-02-19T09:56:53Z",
    //         "content": "Washington:NASA's Perseverance rover has successfully completed the first year since touching down on Mars on February 18, 2021. \r\nWeighing roughly 1,025 kgs, Perseverance is the heaviest rover ever â€¦ [+2581 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "HT Tech",
    //         "title": "iPhone 14 Pro to get big boost, but this Samsung phone ALREADY has it - HT Tech",
    //         "description": "Apple iPhone 14 is said to be launched in September 2022. And the iPhone 14 Pro is expected to have 8GB RAM. Samsung Galaxy S22 already has it.",
    //         "url": "https://tech.hindustantimes.com/tech/news/iphone-14-pro-to-get-big-boost-but-this-samsung-phone-already-has-it-71645263961036.html",
    //         "urlToImage": "https://images.hindustantimes.com/tech/img/2022/02/19/1600x900/APPLE-STOCKS-MILESTONE-6_1641668445854_1645264028137.JPG",
    //         "publishedAt": "2022-02-19T09:52:56Z",
    //         "content": "Apple iPhone 14 is one of the most awaited smartphones and fans want to know about even the smallest of updates related to it. Though the launch of the iPhone 14 is not yet officially confirmed, but â€¦ [+2281 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Newlywed Couple Vikrant Massey And Sheetal Thakur Receive Love From Taapsee, Mouni Roy, Sonakshi Sinha, And Others - NDTV Movies",
    //         "description": "Vikrant Massey and Sheetal Thakur, who got married on February 18, have shared new photos from their wedding",
    //         "url": "https://www.ndtv.com/entertainment/newlywed-couple-vikrant-massey-and-sheetal-thakur-receive-love-from-taapsee-mouni-roy-sonakshi-sinha-and-others-2777324",
    //         "urlToImage": "https://c.ndtvimg.com/2022-02/d69d58jg_vikrant-massey_625x300_19_February_22.jpg",
    //         "publishedAt": "2022-02-19T09:35:59Z",
    //         "content": "Still from Vikrant Massey and Sheetal Thakur's wedding (courtesy: vikrantmassey)\r\nHighlights\r\n<ul><li>Vikrant Massey Got married to Sheetal Thakur on February 18\r\n</li><li>The newlywed couple has nowâ€¦ [+1888 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "hindustantimes.com",
    //         "title": "UP polls: BJP slams Akhilesh for â€˜silenceâ€™ over sentencing of Ahmedabad blasts convicts - Hindustan Times",
    //         "description": "Uttar Pradesh assembly election 2022: CM Yogi Adityanath, Union home minister Amit Shah and I&B minister Anurag Thakur lashed out at the Samajwadi Party chief.",
    //         "url": "https://www.hindustantimes.com/elections/uttar-pradesh-assembly-election/up-polls-bjp-questions-akhilesh-s-silence-after-court-sentences-convicts-101645261782710.html",
    //         "urlToImage": "https://images.hindustantimes.com/img/2022/02/19/1600x900/akhilesh_yadav_firozabad_1645086384198_1645261884902.JPG",
    //         "publishedAt": "2022-02-19T09:31:08Z",
    //         "content": "A day before Uttar Pradesh votes in the third phase, leaders of the ruling Bharatiya Janata Party (BJP) on Saturday launched an all-out attack on Samajwadi Party (SP) chief Akhilesh Yadav, claiming tâ€¦ [+2700 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livemint"
    //         },
    //         "author": "Livemint",
    //         "title": "Future Retail pays nearly â‚¹104.55 cr interest on dollar bond in grace period - Mint",
    //         "description": "Future Retail had stated on 24 January that it had a payment of interest due on the USD Notes as its liquidity position had remained affected due to the continued impact of the Covid-19 on its business operations",
    //         "url": "https://www.livemint.com/companies/news/future-retail-pays-nearly-rs-104-55-cr-interest-on-dollar-bond-in-grace-period-11645260834106.html",
    //         "urlToImage": "https://images.livemint.com/img/2022/02/19/600x338/future_retail_1645261889342_1645261889572.jpg",
    //         "publishedAt": "2022-02-19T09:13:32Z",
    //         "content": "Future Retail Ltd (FRL) has made a payment of USD 14 million (around 104.55 crore) as interest due on the dollar-denominated notes (USD Notes) listed on the Singapore Stock Exchange, the debt-ridden â€¦ [+2083 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Moneycontrol"
    //         },
    //         "author": null,
    //         "title": "India to host 2023 International Olympic Committee session in Mumbai - Moneycontrol",
    //         "description": "India will host the IOC Session for the first time in four decades after 1983, when it was last held in Delhi",
    //         "url": "https://www.moneycontrol.com/news/india/india-to-host-2023-international-olympic-committee-session-in-mumbai-8136551.html",
    //         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/02/4-Mrs.-Nita-Ambani-IOC-President-Thomas-Bach-at-Reliance-Foundation-School-in-2018-592x435.jpg",
    //         "publishedAt": "2022-02-19T08:54:16Z",
    //         "content": "India has won the bid to host the 2023 International Olympic Committee's (IOC) session in Mumbai, in an unopposed race on February 19.\r\nThe Indian delegation made its presentation to IOC members duriâ€¦ [+3517 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Punjab Chief Minister, Sidhu Moosewala After Temple Visit, Charged For Poll Code Breach - NDTV",
    //         "description": "Punjab elections:Punjab Chief Minister Charanjit Singh Channi and singer Shubhdeep Singh Sidhu aka Sidhu Moosewala were today booked for violating the model code of conduct two days before the state assembly polls.",
    //         "url": "https://www.ndtv.com/india-news/punjab-chief-minister-sidhu-moosewala-after-temple-visit-charged-for-poll-code-breach-2777132",
    //         "urlToImage": "https://c.ndtvimg.com/2022-02/11jkru88_channi-moosewala_625x300_19_February_22.jpg",
    //         "publishedAt": "2022-02-19T08:42:00Z",
    //         "content": "Punjab polls: Charanjit Singh Channi had visited a temple with Sidhu Moosewala in Manasa yesterday\r\nManasa: Punjab Chief Minister Charanjit Singh Channi and singer Shubhdeep Singh Sidhu aka Sidhu Mooâ€¦ [+1796 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "TNN",
    //         "title": "Karnataka: No end in sight as hijab controversy continues to simmer, spread - Times of India",
    //         "description": "But protests were held in Milagres College, Kallianpur in Udupi, Kavoor First Grade College in Mangaluru, and Government First Grade College in Puttur",
    //         "url": "https://timesofindia.indiatimes.com/city/mangaluru/karnataka-hijab-row-no-end-in-sight-as-controversy-continues-to-simmer-spread-in-dakshina-kannada-and-udupi-districts/articleshow/89683049.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-89686048,width-1070,height-580,imgsize-117170,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2022-02-19T08:33:00Z",
    //         "content": "First in Karnataka: Mysuru college cancels uniform rule to allow hijabsIn the first punitive action against students seeking entry into colleges despite the interim order of the Karnataka high court â€¦ [+170 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "hindustantimes.com",
    //         "title": "In clean energy push, PM Modi launches Asia's biggest Bio-CNG plant in Indore - Hindustan Times",
    //         "description": "Prime Minister Narendra Modi said the construction of the Bio-CNG plant is a commendable effort to ensure â€œcleaner urban spaces under the principle of Waste to Wealth.â€? | Latest News India",
    //         "url": "https://www.hindustantimes.com/india-news/pm-modi-inaugurates-asia-s-biggest-bio-cng-plant-gobar-dhan-in-indore-101645256300491.html",
    //         "urlToImage": "https://images.hindustantimes.com/img/2022/02/19/1600x900/gobar_dhan_plant_inauguration_by_modi_in_indore1_1645257256616_1645257272990.jpg",
    //         "publishedAt": "2022-02-19T07:55:31Z",
    //         "content": "Prime Minister Narendra Modi inaugurated Asia's biggest Bio-CNG plant - the Gobar-Dhan plant - in Indore on Saturday. \r\nAddressing the event virtually, PM Modi said that initiative of the Bio-CNG plaâ€¦ [+1267 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "India Today"
    //         },
    //         "author": "IndiaToday.in",
    //         "title": "Assembly Elections 2022 Live Updates: BJP to give free LPG gas cylinder on Holi, Diwali every year if voted to power in UP: Rajnath Singh - India Today",
    //         "description": "Assembly Elections 2022 LIVE: In a major setback to Arvind Kejriwal-led Aam Aadmi Party (AAP) days ahead of the Punjab Assembly elections, Union Home Minister Amit Shah has assured state chief minister Charanjit Singh Channi that he would \"personally look intâ€¦",
    //         "url": "https://www.indiatoday.in/elections/story/assembly-elections-2022-live-updates-amit-shah-to-address-rallies-in-rae-bareli-banda-lucknow-cantt-today-1915072-2022-02-19",
    //         "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202202/rajnath2-647x363.jpeg?S_7ltOmP4rYVCp1Jr7ffi7Wf.bInCscz",
    //         "publishedAt": "2022-02-19T07:53:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Autocarindia.com"
    //         },
    //         "author": "Jaiveer  Mehra",
    //         "title": "New Maruti Baleno to get Amazon Alexa support; launch on February 23 - Autocar India",
    //         "description": "Updated connected car tech in the new Baleno will allow owners to issue commands through paired Alexa devices.",
    //         "url": "https://www.autocarindia.com/car-news/new-maruti-baleno-to-get-amazon-alexa-support-launch-on-feb-23-423600",
    //         "urlToImage": "https://cdni.autocarindia.com/ExtraImages/20220219010421_new_baleno.jpg",
    //         "publishedAt": "2022-02-19T07:45:00Z",
    //         "content": "Updated connected car tech in the new Baleno will allow owners to issue commands through paired Alexa devices.In the build up to its launch on February 23, Maruti Suzuki has revealed more details on â€¦ [+2838 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Indian Express"
    //         },
    //         "author": "Sports Desk",
    //         "title": "Virat Kohli, Rishabh Pant to skip third T20I against West Indies - The Indian Express",
    //         "description": "Kohli and Pant will not be playing in the three-match T20 series against Sri Lanka beginning on February 24 in Lucknow followed by two more games at Dharamsala on February 26 and 27.",
    //         "url": "https://indianexpress.com/article/sports/cricket/virat-kohli-rishabh-pant-break-from-bio-bubble-before-third-t20i-against-wi-skip-lanka-t20is-7780899/",
    //         "urlToImage": "https://images.indianexpress.com/2022/02/Pant-Kohli.jpg",
    //         "publishedAt": "2022-02-19T07:01:28Z",
    //         "content": "Virat Kohli and Rishabh Pant have been given rest for the third T20 International against the West Indies scheduled in Kolkata on Sunday. The duo will not be playing in the three-match T20 series agaâ€¦ [+2619 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Ukraine Crisis: Situation On The Ground And Russia's Demands - NDTV",
    //         "description": "The diplomatic efforts will continue, US President Joe Biden said but warned of sanctions if Russia invades its Ukraine. Russian-backed separatists packed civilians onto buses out of breakaway regions on Friday.",
    //         "url": "https://www.ndtv.com/world-news/ukraine-crisis-situation-on-the-ground-and-russias-demands-2777110",
    //         "urlToImage": "https://c.ndtvimg.com/2022-02/g8mqkgog_-russia-ukraine-border-maxar_625x300_19_February_22.jpg",
    //         "publishedAt": "2022-02-19T06:43:00Z",
    //         "content": "Satellite images have shown increased presence of Russian forces along the Ukrain border.\r\nThe tension along the Ukrainian border had been brewing for months, but escalated in recent months after Rusâ€¦ [+5127 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "India Today"
    //         },
    //         "author": null,
    //         "title": "IND vs WI: Fans divided over Rohit Sharma kicking the ball after Bhuvneshwar drops Rovman Powell's catch - India Today",
    //         "description": "India vs West Indies: Fans were shocked after the clip of Rohit Sharma kicking the ball over Bhuvneshwar Kumar dropping the decisive catch went viral on the social media.",
    //         "url": "https://www.indiatoday.in/sports/cricket/story/ind-vs-wi-fans-divided-over-rohit-sharma-kicking-the-ball-after-bhuvneshwar-drops-rovman-powell-s-catch-1915123-2022-02-19",
    //         "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/AP22049616278511-647x363.jpeg?eGurR7dyXVLxv12jfiMZEDU._9nmCptm",
    //         "publishedAt": "2022-02-19T06:16:15Z",
    //         "content": null
    //     }
    // ]

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

   const capitalize = (s)=>{
    return s[0].toUpperCase() + s.slice(1);
    }


    const updateNews = async () =>{
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(50)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
        
    }

    useEffect(() => {
      updateNews();
    document.title = `${capitalize(props.category)} - NewsMonkey`
      
     }, [])
    

    

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1)
       
        let data = await fetch(url);
        let parsedData = await data.json()
       
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };


    
        return (
            <div className='my-5'>
                <h2 className='text-center' style={{marginTop:'90px'}} >News Monkey - Top {capitalize(props.category)} Headlines</h2>
                {loading && <Spinner/>}
                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>}>
                   <div className='container'> 
                    <div className='row'>
                    {articles.map((element) => {
                        //it demands unique key in array which is unique paste in key var
                        return <div className='col-md-4'  key={element.url}  >
                            <NewsItem title={element.title?element.title.slice(0, 45):''} description={element.description?element.description.slice(0, 88):''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>

                        </div>


                    })}
                </div>
                </div>
                 </InfiniteScroll>

                
            </div>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }



export default News
