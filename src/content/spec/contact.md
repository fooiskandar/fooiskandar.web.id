<section class="formcarry-container">
    <form id="my-formcarry-form" action="https://formcarry.com/s/3eS1vYy52Z3" method="POST" enctype="multipart/form-data">
      
      <div class="formcarry-block">
        <label for="fc-generated-1-name">Nama</label>
        <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
      </div>
      
      <div class="formcarry-block">
        <label for="fc-generated-1-email">Alamat e-mail</label>
        <input type="email" name="email" id="fc-generated-1-email" placeholder="janji@jini.com" />
      </div>
      
      <div class="formcarry-block">
        <label for="fc-generated-1-message">Pesan anda</label>
        <textarea name="message" name="message" id="fc-generated-1-message" placeholder="Tulis pesan anda disini ..."></textarea>
      </div>
      
      <!-- REQUIRED FOR RECAPTCHA -->
      <div class="formcarry-block">
        <!-- DON'T FORGET TO CHANGE YOUR YOUR_SITE_KEY that you grab after Step 1. -->
        <button 
          class="g-recaptcha" 
          data-sitekey="6Le2wwkrAAAAACUpFtV7NX5RUrh8u6NybPb0a2B-" 
          data-callback='onSubmit' 
          data-action='submit'
        >Submit</button>
      </div>
    
    </form>
  </section>
  <script>
    function onSubmit(token) {
      document.getElementById("my-formcarry-form").submit();
    }
  </script>