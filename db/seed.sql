USE bands_db;

-- BANDS ROLE SEEDS --
INSERT INTO role (band_name, bio, genre, email, phone, rate, location)
VALUES ('Broken Color', Local up and coming band. Just two dudes trying to make music, Alternative, brokencolor@gmail.com,830-349-5656, $400, San Antonio Texas), 
('Ghost Town', Ghost Town is an American electronic band from Los Angeles, California. The band formed on September 4, 2012, and in 2013 were signed to Fueled by Ramen.
The band is made up of vocalist Kevin "Ghost" McCullough and keyboardist Evan Pearce, drummer MannYtheDrummer and guitarist/backing vocalist Alix Koochaki., Electronic, ghosttownband@gmail.com, 626-232-3678, $1000, Los Angeles California), 

('Gleaming Streets', Local San Antonio born Punk Rock band. Put together by Jeffrey Lubin who also formed Between Then And Now. Gleaming Streets was inspired by a long roadtrip that involved light rain and ther perfect roadside lighting., Punk Rock, info@gleamingstreets.com, 210-245-9090, $500, San Antonio Texas), 

('Nothing More', Formed in 2003, Nothing More is an American rock band from San Antonio Texas., Rock/Progressive/Alternative, nothingmorethefew@gmail.com, 210-456-7796, $2000, San Antonio), 

('Ministry', Ministry is an American industrial metal band founded in Chicago Illinois in 1981 by Al Jourgensen. Ministry evolved into one of the pioneers of industrial metal in the late 1980s., Industrial metal, ministryband@gmail.com, 210-899-4676, $5000, Chicago Illinois), 

('AC/DC', An Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.The band themselves call it simply rock and roll., Hard Rock, info@acdc.com, 02-9876-5432, $1.5 Mill, Sydney Australia), 
Guns N Roses, often abbreviated as GNR, is an American hard rock band from Los Angeles, California, formed in 1985. When they signed to Geffen Records in 1986, the band comprised vocalist Axl Rose, lead guitarist Slash, rhythm guitarist Izzy Stradlin, bassist Duff McKagan, and drummer Steven Adler. The current lineup consists of Rose, Slash, McKagan, guitarist Richard Fortus, drummer Frank Ferrer and keyboardists Dizzy Reed and Melissa Reese., Heavy Metal/Hard Rock, info@gunsnroses.com, 626-788-1616, $1.5 Mill, Los Angeles California), 

('Guns N Roses', 
('My Chemical Romance', My Chemical Romance (MCR) is an American rock band from Newark, New Jersey. The current lineup consists of lead vocalist Gerard Way, guitarists Ray Toro, Frank Iero, and bassist Mikey Way., emo/pop-punk/post-hardcore, mcrwelcometbp@gmail.com, 732-656-5661, $750K, Newark New Jersey), 

('Paramore', Paramore is an American rock band from Franklin, Tennessee, formed in 2004. The band currently consists of lead vocalist Hayley Williams, guitarist Taylor York and drummer Zac Farro. Williams and Farro are founding members of the group, while York, a high school friend of the original lineup, joined in 2007., alternative/pop-punk/pop-emo, paramore@gmail.com, 615-791-3217, $750k, Franklin Tennessee); 

-- VENUE SEEDS --
INSERT INTO venue (venue_name, size, location, email, phone, payment, reviews, hours) 
VALUES 
('Fitzgerald Bar & Live Music Venue', 500 capacity, 437 McCarty Rd #101 San Antonio TX 78216, fitzrockssa@gmail.com, 210-607-7007, $200/hr, 4.4/5, Mon 6pm–2am
Tue 6pm–2am
Wed 6pm–2am
Thu 6pm–2am
Fri 6pm–2am
Sat 6pm–2am
Sun Closed), 

('LUNA', 100 capacity, 6740 San Pedro Ave ​San Antonio TX 78216, info@lunalive.com, 210-777-3434, $600/night, 4.6/5, Mon closed
Tue closed
Wed closed
Thu 8pm–2am
Fri 8pm–2am
Sat 8pm–2am
Sun Closed ), 

('Main Street Bar', 50 capacity, 13477 Wetmore Rd, San Antonio, TX 78247, info@mainstsa.com, 210-345-6789, $500/night, 4.4/5, Mon 2pm-2am
Tue 2pm-2pm
Wed 2pm-2am
Thu 2pm-2am
Fri 2pm-2am
Sat 11am-2am
Sun 2pm-2am ), 

('Paper Tiger', 1000 capacity, 2410 N St Marys St, San Antonio, TX 78212, booking@papertigersatx.com, 210-987-6543, $900/night, 4.4/5, Mon closed
Tue closed
Wed closed
Thu 6pm–2am
Fri 6pm–2am
Sat 6pm–2pm
Sun closed), 

('On The Rocks', 50 capacity, 270 Losoya St, San Antonio, TX 78205, booking@ontherockssa.com, 210-228-0000, $100/hr, 4.2/5,Mon 11am–9pm
Tue 11am–9pm
Wed 11am–9pm
Thu 11am–9pm
Fri 11am–9pm
Sat 11am–9pm
Sun 11am–9pm  ), 

('Sams Burger Joint', 500 capacity, 330 E Grayson St San Antonio TX 78215, samsburgerjoint@gmail.com, 210-223-2830, $300/hr, 4.3/5,Mon 11am–9pm
Tue 11am–9pm
Wed 11am–9pm
Thu 11am–9pm
Fri 11am–9pm
Sat 11am–9pm
Sun 11am–9pm );

('Spechts Texas', 100 capacity, 112 W Specht Rd San Antonio TX 78260, spechtstexas@gmail.com, 830-438-1888, $400/night, 4.4/5, Mon closed
Tue closed
Wed closed
Thu 11am–8pm
Fri 11am–11pm
Sat 11am–11pm
Sun 11am–4pm);

('Reptilez Live Music Venue', 150 capacity, 5418 Enrique M. Barrera Pkwy, San Antonio, TX 78227, reptilezsa@gmail.com, 210-432-8840, $600/night, 4.6/5, Mon 5pm-2am
Tue 5pm-2am
Wed 5pm-2am
Thu 5pm-2am
Fri 5pm-2am
Sat 5pm-2am
Sun 5pm-2am);

('Retox Bar', 75 capacity, 1031 Patricia #105 San Antonio TX 78213, booking@retoxbar.net, 210-775-2886, $500/night, 4.1/5, Mon 3pm-2am
Tue 3pm-2am
Wed 3pm-2am
Thu 3pm-2am
Fri 3pm-2am
Sat 3pm-2am
Sun 12pm-2am);