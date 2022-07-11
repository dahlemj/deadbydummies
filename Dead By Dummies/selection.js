
$(document).ready(function(){

    let perk1 = false;
    let perk2 = false;
    let perk3 = false;
    let perk4 = false;

    //check next open perk slot function
    //returns the name of the perk slot (perk1, perk2, etc.)
    function checkSlot(){
        if(perk1 == false){
            perk1 = true;
            return "#perk1";
        }else if(perk2 == false){
            perk2 = true;
            return "#perk2";
        }else if(perk3 == false){
            perk3 = true;
            return "#perk3";
        }else if(perk4 == false){
            perk4 = true
            return "#perk4";
        }else{
            return "";
        }

    }

    //function to change the icon automatically
    //checks if image is already in perk deck
    function swapImage(imgName){

        //checks img name with imgName
        if($("#perk1").attr("src") == "images/" + imgName){
            $("#perk1").attr("src","images/perk.png");
            perk1 = false;
            return;
        }else if($("#perk2").attr("src") == "images/" + imgName){
            $("#perk2").attr("src","images/perk.png");
            perk2 = false;
            return;
        }else if($("#perk3").attr("src") == "images/" + imgName){
            $("#perk3").attr("src","images/perk.png");
            perk3 = false;
            return;
        }else if($("#perk4").attr("src") == "images/" + imgName){
            $("#perk4").attr("src","images/perk.png");
            perk4 = false;
            return;
        }

        let slot = checkSlot();
        if(slot != ""){
            $(slot).attr("src", "images/" + imgName);
        }
    }

    //clear button

    $("#clear").click(function(){
        perk1 = false;
        perk2 = false;
        perk3 = false;
        perk4 = false;

        $("#perk1").attr("src","images/perk.png"); 
        $("#perk2").attr("src","images/perk.png");   
        $("#perk3").attr("src","images/perk.png");    
        $("#perk4").attr("src","images/perk.png");
    });

    //clearing perk by clicking main perk deck

    $("#perk1").click(function(){
        perk1 = false;
        $("#perk1").attr("src","images/perk.png"); 
    });

    $("#perk2").click(function(){
        perk2 = false;
        $("#perk2").attr("src","images/perk.png"); 
    });

    $("#perk3").click(function(){
        perk3 = false;
        $("#perk3").attr("src","images/perk.png"); 
    });

    $("#perk4").click(function(){
        perk4 = false;
        $("#perk4").attr("src","images/perk.png"); 
    });

    //replacing blank icon with clicked icon

    $("#nursescalling").click(function(){
        swapImage("nursescalling.png");
    });

    $("#agitation").click(function(){
        swapImage("agitation.png");
    });

    $("#bamboozle").click(function(){
        swapImage("bamboozle.png");
    });

    $("#bbqandchili").click(function(){
        swapImage("bbqandchili.png");
    });

    $("#beastOfPrey").click(function(){
        swapImage("beastOfPrey.png");
    });

    $("#bitterMurmur").click(function(){
        swapImage("bitterMurmur.png");
    });

    $("#bloodEcho").click(function(){
        swapImage("bloodEcho.png");
    });

    $("#bloodhound").click(function(){
        swapImage("bloodhound.png");
    });

    $("#bloodWarden").click(function(){
        swapImage("bloodWarden.png");
    });

    $("#brutalStrength").click(function(){
        swapImage("brutalStrength.png");
    });

    $("#callOfBrine").click(function(){
        swapImage("callOfBrine.png");
    });

    $("#claustrophobia").click(function(){
        swapImage("claustrophobia.png");
    });

    $("#corruptIntervention").click(function(){
        swapImage("corruptIntervention.png");
    });

    $("#coulrophobia").click(function(){
        swapImage("coulrophobia.png");
    });

    $("#coupDeGrace").click(function(){
        swapImage("coupDeGrace.png");
    });

    $("#darkDevotion").click(function(){
        swapImage("darkDevotion.png");
    });

    $("#darknessRevealed").click(function(){
        swapImage("darknessRevealed.png");
    });


    $("#deadlock").click(function(){
        swapImage("deadlock.png");
    });

    $("#deadManSwitch").click(function(){
        swapImage("deadManSwitch.png");
    });

    $("#deathbound").click(function(){
        swapImage("deathbound.png");
    });

    $("#deerstalker").click(function(){
        swapImage("deerstalker.png");
    });

    $("#discordance").click(function(){
        swapImage("discordance.png");
    });

    $("#dissolution").click(function(){
        swapImage("dissolution.png");
    });

    $("#distressing").click(function(){
        swapImage("distressing.png");
    });

    $("#dragonsGrip").click(function(){
        swapImage("dragonsGrip.png");
    });

    $("#dyinglight").click(function(){
        swapImage("dyinglight.png");
    });

    $("#enduring").click(function(){
        swapImage("enduring.png");
    });

    $("#eruption").click(function(){
        swapImage("eruption.png");
    });

    $("#fearmonger").click(function(){
        swapImage("fearmonger.png");
    });

    $("#fireUp").click(function(){
        swapImage("fireUp.png");
    });

    $("#forcedPenance").click(function(){
        swapImage("forcedPenance.png");
    });

    $("#franklins").click(function(){
        swapImage("franklins.png");
    });

    $("#furtiveChase").click(function(){
        swapImage("furtiveChase.png");
    });

    $("#gearHead").click(function(){
        swapImage("gearHead.png");
    });

    $("#grimEmbrace").click(function(){
        swapImage("grimEmbrace.png");
    });

    $("#hangmansTrick").click(function(){
        swapImage("hangmansTrick.png");
    });

    $("#hauntedGround").click(function(){
        swapImage("hauntedGround.png");
    });

    $("#hexBloodFavor").click(function(){
        swapImage("hexBloodFavor.png");
    });

    $("#HexCrowdControl").click(function(){
        swapImage("HexCrowdControl.png");
    });

    $("#hexDevourHope").click(function(){
        swapImage("hexDevourHope.png");
    });

    $("#hexPentimento").click(function(){
        swapImage("hexPentimento.png");
    });
    
    $("#HexPlaything").click(function(){
        swapImage("HexPlaything.png");
    });

    $("#hexRetribution").click(function(){
        swapImage("hexRetribution.png");
    });

    $("#hexUndying").click(function(){
        swapImage("hexUndying.png");
    });

    $("#hoarder").click(function(){
        swapImage("hoarder.png");
    });


    $("#HuntressLullaby").click(function(){
        swapImage("HuntressLullaby.png");
    });

    $("#hysteria").click(function(){
        swapImage("hysteria.png");
    });

    $("#imAllEars").click(function(){
        swapImage("imAllEars.png");
    });

    $("#infectiousFright").click(function(){
        swapImage("infectiousFright.png");
    });

    $("#insidious").click(function(){
        swapImage("insidious.png");
    });

    $("#ironGrasp").click(function(){
        swapImage("ironGrasp.png");
    });

    $("#ironMaiden").click(function(){
        swapImage("ironMaiden.png");
    });

    $("#jolt").click(function(){
        swapImage("jolt.png");
    });

    $("#knockOut").click(function(){
        swapImage("knockOut.png");
    });

    $("#lethalPursuer").click(function(){
        swapImage("lethalPursuer.png");
    });

    $("#lightborn").click(function(){
        swapImage("lightborn.png");
    });

    $("#madGrit").click(function(){
        swapImage("madGrit.png");
    });

    $("#makeYourChoice").click(function(){
        swapImage("makeYourChoice.png");
    });

    $("#mercilessStorm").click(function(){
        swapImage("mercilessStorm.png");
    });

    $("#monitorAndAbuse").click(function(){
        swapImage("MonitorAndAbuse.png");
    });

    $("#nemesis").click(function(){
        swapImage("nemesis.png");
    });

    $("#noOneEscapesDeath").click(function(){
        swapImage("noOneEscapesDeath.png");
    });

    $("#NoWayOut").click(function(){
        swapImage("NoWayOut.png");
    });

    $("#oppression").click(function(){
        swapImage("oppression.png");
    });

    $("#overcharge").click(function(){
        swapImage("overcharge.png");
    });

    $("#overwhelmingPresence").click(function(){
        swapImage("overwhelmingPresence.png");
    });

    $("#painResonance").click(function(){
        swapImage("painResonance.png");
    });

    $("#playWithYourFood").click(function(){
        swapImage("playWithYourFood.png");
    });

    $("#popGoesTheWeasel").click(function(){
        swapImage("popGoesTheWeasel.png");
    });

    $("#predator").click(function(){
        swapImage("predator.png");
    });

    $("#rancor").click(function(){
        swapImage("rancor.png");
    });

    $("#rememberMe").click(function(){
        swapImage("rememberMe.png");
    });

    $("#ruin").click(function(){
        swapImage("ruin.png");
    });

    $("#saveTheBestForLast").click(function(){
        swapImage("SaveTheBestForLast.png");
    });

    $("#ScourgeHookGiftOfPain").click(function(){
        swapImage("ScourgeHookGiftOfPain.png");
    });

    $("#shadowborn").click(function(){
        swapImage("shadowborn.png");
    });

    $("#shatteredHope").click(function(){
        swapImage("shatteredHope.png");
    });

    $("#sloppyButcher").click(function(){
        swapImage("sloppyButcher.png");
    });

    $("#spiesFromTheShadows").click(function(){
        swapImage("spiesFromTheShadows.png");
    });

    $("#spiritFury").click(function(){
        swapImage("spiritFury.png");
    });

    $("#Starstruck").click(function(){
        swapImage("Starstruck.png");
    });

    $("#stridor").click(function(){
        swapImage("stridor.png");
    });

    $("#surveillance").click(function(){
        swapImage("surveillance.png");
    });

    $("#TerritorialImperative").click(function(){
        swapImage("TerritorialImperative.png");
    });

    $("#thanatophobia").click(function(){
        swapImage("thanatophobia.png");
    });

    $("#theThirdSeal").click(function(){
        swapImage("theThirdSeal.png");
    });

    $("#thrillingTremors").click(function(){
        swapImage("thrillingTremors.png");
    });

    $("#thrillOfTheHunt").click(function(){
        swapImage("thrillOfTheHunt.png");
    });

    $("#tinkerer").click(function(){
        swapImage("tinkerer.png");
    });

    $("#trailOfTorment").click(function(){
        swapImage("trailOfTorment.png");
    });

    $("#unnervingPresence").click(function(){
        swapImage("unnervingPresence.png");
    });

    $("#unrelenting").click(function(){
        swapImage("unrelenting.png");
    });

    $("#whispers").click(function(){
        swapImage("whispers.png");
    });

    $("#zanshinTactics").click(function(){
        swapImage("zanshinTactics.png");
    });
});


