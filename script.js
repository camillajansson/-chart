new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    
    data: {
      labels: ["MOLLY", "BELLA", "LUDDE", "CHARLIE", "WILMA", "BAMSE", "SIGGE","DORIS",],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#18CDD1","#D3215D","#C1253B","#B3D5D7","#E3747A","#002F43","#7C939B","#10A9AF"],
          data: [7351,5262,4043,3946,3820,3472,3422,3255],
          hoverBackgroundColor: ["#117F81","#8A153D","#731623","#6B8182","#9A4E52","#001A26","#4D5B60","#0A6266"],
          hoverBorderWidth: [8,8,8,8,8,8,8,8]
        }
      ]
    },
    options: {
      
      
      title: {
        display: true,
        position: 'bottom',
        fontFamily: 'segoe ui',
        fontStyle: 'bold',
        padding: 80,
        text: 'Statistics on most popular dog names in Sweden 2016'
      }
    }



});