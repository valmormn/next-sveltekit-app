<script lang="ts">
  let data = {
    number: { icon: "a", text: "21 999 324 792" },
    mail: { icon: "a", text: "correio@valmor.dev" },
    site: { icon: "a", text: "https://valmor.dev" },
    address: { icon: "a", text: "Rio de Janeiro RJ" },
    download: { icon: "a", text: "Download PDF" },
  };

  //   console.log(data);
</script>

<svelte:head>
  <title>Valmor's Resumé</title>
  <meta property="og:title" content="Valmor Auth" />
  <meta property="og:description" content="Resumé" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://valmor.dev" />
  <meta property="og:image" content="https://valmor.dev/img/logo192.png" />
  <meta property="og:image:width" content="192" />
  <meta property="og:image:height" content="192" />
</svelte:head>

<section class="">
  <aside class="aside">
    <div class="">
      <div class="">
        <img class="img" src="/img/meb.jpeg" alt="Foto Valmor" />
      </div>
    </div>
    <table class="table table-compact w-fit">
      <!-- head -->
      <tbody>
        <tr>
          <th>📞</th>
          <td>
            <a
              href="https://wa.me/5521999324792/?text=Oi%20Valmor!%20Acabei%20de%20visitar%20o%20seu%20site."
              >21 999 324 792</a
            >
            <!-- <a href="https://web.whatsapp.com/send?phone=5521999324792&amp;text=Oi+Valmor%21+Acabei+de+visitar+o+seu+site.&amp;app_absent=0" title="Share on WhatsApp">21 999 324 792</a> -->
          </td>
        </tr>
        <tr>
          <th>📬</th>
          <td><a href="mail://correio@valmor.dev">correio@valmor.dev</a></td>
        </tr>
        <tr>
          <th>🌐</th>
          <td><a href="https://valmor.dev">www.valmor.dev</a></td>
        </tr>
        <tr>
          <th>🏠</th>
          <td>Rio de Janeiro</td>
        </tr>
        <tr>
          <th>📃</th>
          <td>
            <a href="/doc/CurriculumVitae.pdf" download="">Download PDF</a>
          </td>
        </tr>
      </tbody>
    </table>
  </aside>
  <article class="main prose md:container sm:prose-lg md:mx-auto md:prose-lg lg:prose-lg">
    <h1>Valmor Martins do Nascimento</h1>
    <p>
      Versatile engineer, holds a bachelor's degree in Naval Engineering from the Federal University
      of Rio de Janeiro (<a href="https://oceanica.ufrj.br" target="_blank">UFRJ</a>) with
      professional experience in the offshore and shipbuilding industry. Currently pursuing a second
      degree in Electrical & Electronic Engineering at State University of Rio de Janeiro (<a
        href="http://ele.eng.uerj.br"
        target="_blank">UERJ</a
      >) expecting to graduate in 2024.
    </p>
    <p>
      Also experienced in running a small family business in the textile area, covering all the
      essential areas of the business, from sales, through product design, production and customer
      service.
    </p>

    <p>
      A passionate and self-motivated individual with a strong desire to learn and grow. Is a
      self-starter and a team player, always open to new challenges and opportunities.
    </p>

    <h2>Education</h2>
    <ul>
      <li>
        Universidade Estadual do Rio de Janeiro
        <ul><li>Bachelor of Electrical Engineering - Evening shift Prev. 2024</li></ul>
      </li>
      <li>
        2012 - Universidade Federal do Rio de Janeiro
        <ul><li>Bachelor of Oceanic & Naval Engineering</li></ul>
      </li>
    </ul>

    <h2>Skills</h2>
    <p>
      Long-time Linux system user, familiar with the terminal, is an enthusiastic of web application
      development, Internet of Things, graphical and 3D design tools in addition to current office
      tools.
    </p>

    <ul>
      <li>Languages: Bash, Python, Javascript, C++</li>
      <li>Tools: React, Svelte, Strapi CMS, Tailwind, Flutter</li>
      <li>DBMS: MySQL, PostgreSQL, MongoDB, Supabase</li>
      <li>Design: Photoshop, Illustrator, CorelDraw, Rhino, AutoCAD</li>
    </ul>

    <h2>Languages</h2>
    <p>
      As a language lover and literature enthusiast, with daily practice has developed a good level
      of both oral and written comprehension and production, and is always up for a pleasant
      conversation.
    </p>
    <ul>
      <li>English: Fluent and able to address any matter.</li>
      <li>Français: Je suis avancé en français, pratiquant au quotidien.</li>
      <li>Español: Tengo conocimientos avanzados en español.</li>
    </ul>
  </article>
</section>

<style>
  section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 5rem;
  }

  h1 {
    text-align: center;
  }

  p {
    /* margin: 0.0em 0 !important; */
  }

  .img {
    border-radius: 50%;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
  }

  @media screen and (max-width: 700px) {
    section {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  .aside {
    max-width: 240px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    padding: 12px;
  }

  .aside > table {
    margin-top: 1rem;
  }

  .main {
    /* width: 300px; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    padding: 16px;
  }
</style>
