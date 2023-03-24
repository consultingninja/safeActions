<script lang='ts'>
    export let form;
	import { enhance } from '$app/forms';
    let currentForm;


</script>

<h1>Welcome to Consulting Ninja</h1>
<h2>Fun with SvelteKit Forms!</h2>

<!-- add to form to show enhance use:enhance={({ form, data, action, cancel }) => {
    
    if(data.get('firstname') ==='dave')cancel()
  }}  -->

  {#if form?.tooOld === true}
  <p class="oldaf">Nice Try Boomer!</p>
  {/if}

<div class="form">

    <form bind:this={currentForm}  method="POST" action="?/act"  >
        <div class="item-wrap">
            <label for="firstname">First Name</label>
            <input value={form?.firstname?? ''}  class="form-item" required type="text" name="firstname" />
        </div>
        <div  class="item-wrap">
            <label for="lastname">Last Name</label>
            <input value={form?.lastname?? ''} class="form-item" required type="text" name="lastname" />
        </div>
        <div  class="item-wrap">
            <label for="age">Age Range</label>
            <select value={form?.age?? '0'} class="form-item" name="age"  required>
                <option value="0">0-10</option>
                <option value="11">11-21</option>
                <option value="22">22-33</option>
                <option value="34">34-45</option>
                <option value="46">46-57</option>
                <option value="oldaf">Old AF</option>

              </select>
        </div>
        <div>
            <input class="btn_add" type="submit" name="input_add" value="Submit" />
        </div>

    
    </form>
</div>

<div>
    {#if form}
        {JSON.stringify(form)}
    {/if}
</div>




<style>
    h1{
        margin: .25em;
        margin: 1em;
    }
    h2{
        margin: .25em;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .form{
        width: 35vw;
        margin-left: 4em;
        margin-right: 4em;
        padding:.5em;
        background-color: #5b615f;
        border: 2px solid #FFF;
    }
    .form-item{
        margin-top: .5em;
        margin-bottom: .5em;
        width:80%;
        margin-left:10%;
        margin-right:10%;
    }
    .item-wrap{
        width:100%;

    }
    label{
        display: block;
        margin-left:10%;
        margin-right:10%;

    }
    .oldaf{
        color: #f70707;
    }
    </style>