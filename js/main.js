// default value setter
var arr1 = [2, 2, 2, 2, 2, 2, 2, 2];
var arr2 = [3, 3, 3, 3, 3, 3, 3, 3];
generateGraph(arr1,arr2);

// function for saving data dynamically
    function saveValue()
    {
    var input1 = document.getElementById('myInput1');
    var input2 = document.getElementById('myInput2');
    var input3 = document.getElementById('myInput3');
    var input4 = document.getElementById('myInput4');
    var input5 = document.getElementById('myInput5');
    var input6 = document.getElementById('myInput6');
    var input7 = document.getElementById('myInput7');
    var input8 = document.getElementById('myInput8');
        var val1 =  parseFloat(input1.value);
        var val2 = parseFloat(input2.value);
        var val3 = parseFloat(input3.value);
        var val4 = parseFloat(input4.value);
        var val5 = parseFloat(input5.value);
        var val6 = parseFloat(input6.value);
        var val7 = parseFloat(input7.value);
        var val8 = parseFloat(input8.value);


    var input11 = document.getElementById('myInput11');
    var input22 = document.getElementById('myInput22');
    var input33 = document.getElementById('myInput33');
    var input44 = document.getElementById('myInput44');
    var input55 = document.getElementById('myInput55');
    var input66 = document.getElementById('myInput66');
    var input77 = document.getElementById('myInput77');
    var input88 = document.getElementById('myInput88');
        var val11 = parseFloat(input11.value);
        var val22 = parseFloat(input22.value);
        var val33 = parseFloat(input33.value);
        var val44 = parseFloat(input44.value);
        var val55 = parseFloat(input55.value);
        var val66 = parseFloat(input66.value);
        var val77 = parseFloat(input77.value);
        var val88 = parseFloat(input88.value);

        var arr1 = new Array(val1,val2,val3,val4,val5,val6,val7,val8);
        var arr2 = new Array(val11,val22,val33,val44,val55,val66,val77,val88);
        generateGraph(arr1,arr2)

    }


function generateGraph(arr1,arr2)
{
var ctx = document.getElementById('myChart').getContext('2d');
var myRadarChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Komunikasjon', 'Samhandling', 'Ekspertise', 'Digitalisering', 'Baerekraft', 'Samarbeidspartnere', 'Energi', 'Inovasjon'],
        datasets: [
            {
                label: 'SNITT CCC NA',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(61, 111, 183)',
                pointRadius: 0,
                data: arr1
            },{
                label: 'SNITT CCC MAL',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(223, 129, 142)',
                pointRadius: 0,
                data: arr2
            }
        ]
    },

    // Configuration options go here
    options: {
        scale: {
            ticks: {
                max: 10,
                min: -1,
                stepSize: 1
            },
            angleLines: {
                display: false
            },
            gridLines: {
                color: '#afaaaa',
                drawTicks: false,
                offsetGridLines: true
            },
            pointLabels: {
                fontColor: '#6d6c6c',
                fontSize: 14
            },
        }
    }
});
}