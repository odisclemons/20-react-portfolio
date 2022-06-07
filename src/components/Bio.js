const Bio = () => {
  const handleToggle = () => {};
  return (
    <section id="about" style={{ height: 500 }}>
      <div className="section-heading">
        <h1>About Me</h1>
      </div>
      <div className="section-content">
        <p>
          I have had a love for computers since the age of 13. My high school
          was woefully outdated when it came to technology, but it worked in my
          favor. I got to learn the ins and outs of msdos and pc dos in the late
          90s on computers as old as the IBM 286. I got to use the IBM dosshell
          and early versions of Windows (im talking version 2.8 and 3.1) long
          after they were obselete. I didnt care; I just loved the technology.
        </p>

        <p>
          The first time I realized that you could type instructions into a
          screen and make a computer do things was after reading the msdos
          manual. I learned what was called batch scripting (similar to bash
          scripting, but without all the useful parts). I learned to modify the
          autoexec.bat file and customize how my pc booted up. This was back in
          the days when Windows was just a program that ran on DOS. Good times.
        </p>

        <p>
          My first actual programs were written in MS Quick BASIC. You could
          create games and all kinds of things in BASIC and even compile them to
          executable programs! This fascinated me for some reason and fueled a
          lifelong obsession with computer code.
        </p>

        <p>
          At some point, I discovered girls and the Sony Playstation, and my
          little BASIC programs went by the wayside. Eventually, I learned
          enough Visual Basic to make some simple Windows applications and a
          Microsoft Access database.
        </p>

        <p>
          My first program that people other than myself used was a Microsoft
          Access database with a nice front end for the Passaic Police. They
          loved it and they used it for years after I had received another job
          offer and stopped supporting it. I eventually learned the LAMP stack
          and rewrote it in PHP 5. I loved PHP and became fascinated that I
          could deploy my own web server from scratch. After a while, I left
          coding alone again to focus on IT work and learn Linux. I tried to
          daily drive an Arch Linux build on a Microsoft network running Active
          Directory lol. HUGE mistake. I would break it at least once a week and
          have to rebuild the system from scratch, much to the annoyance of the
          IT director who wished I would just use Windows like a normal person.
          That experience was valuable though, because I learned how operatings
          systems are put together. I learned about the init system, desktop
          environments, boot loaders, partitions, all of the stuff. It was all
          valuable experience.
        </p>

        <p>
          Fast forward to 2017. I was trying to build a very ambitious PHP app
          and tried to get another developer to help. I'll never forget his
          words because they literally changed my life: "Bruh... why you working
          so hard? You dont gotta build everything from scratch. Just use a
          framework." A framework! I had never thought of that. I could take
          advantage of libraries and frameworks that better, more experienced
          developers had built to make my apps better. Also, these guys had made
          all the security mistakes for me, exposed themselves to
          vulnerabilities, and patched them so I didn't have to. But which
          framework?
        </p>
        <p>
          Well, obviously Laravell if I was going to stick with PHP. But, I
          wasn't going to stick with PHP; I wanted to learn the newest shinyest
          thing. I wanted to learn a single language that could be applied to
          all aspects of an app. I wanted something I could build an app for the
          web, phones, tablets, Windows, and MacOS. Theres only one language
          that can literally do it all: Web Assembly. Im joking; of course it's
          Javascript, the one man band.
        </p>
        <div className="centerStuff moreContainer">
          <button className="more" id="aboutBtn" onClick={handleToggle}>
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
