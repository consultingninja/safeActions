<script lang='ts'>
    export let form;

    let currentForm;


</script>

<h1>Welcome to Consulting Ninja</h1>
<h2>Fun with Forms!</h2>

<div class="form">
    <form bind:this={currentForm}  method="POST" >
        <div>
            <label for="input_firstname">First Name</label>
            <input required type="text" name="input_name" />
        </div>
        <div>
            <label for="input_lastname">Last Name</label>
            <input required type="text" name="input_name" />
        </div>
        <div>
            <label for="input_type">Input Type</label>
            <select name="input_type"  required>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="password">Password</option>
                <option value="date">Date</option>
                <option value="email">Email</option>
                <option value="time">Time</option>

              </select>
        </div>
        <div>
            <label for="input_add">Add Input</label>
            <input class="btn_add" type="submit" name="input_add" value="Submit" />
        </div>

    
    </form>
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
        flex-direction: row;
        justify-content: space-around;
    }

    .form{
        width: 60%;
        height:3em;
        margin-left: 4em;
        margin-right: 4em;
        padding:.5em;
        background-color: #5b615f;
        border: 2px solid #FFF;
    }

    label{
        display: block;
    }
    </style>