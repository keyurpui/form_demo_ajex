/**
 * Created by keyur on 8/20/2016.
 */
$(document).ready(function () {
    $("#countryOpt").change(function () {
        var val = $(this).val();
        if (val == "australia") {
            var URL = "JSON/newJson.JSON";
            $.ajax({
                url: URL,
                dataType: 'JSON',
                'type': 'GET',
                'timeout': 1000,
                success: function (response) {
                    var ausData = response.Australia;
                    var data = '';
                    for (var i = 0; i < ausData.length; i++) {
                        data += "<option value="+ausData[i].id+">"+ ausData[i].id+"</option>";
                        $("#districtOpt").html(data);
                    }
                }
            });
        } else if (val == "usa") {
            var URL = "JSON/newJson.JSON";
            $.ajax({
                url: URL,
                dataType: 'JSON',
                'type': 'GET',
                'timeout': 1000,
                success: function (response) {
                    var usData = response.USA;
                    var data = '';
                    for (var i = 0; i < usData.length; i++) {
                        data += "<option value="+usData[i].id+">"+ usData[i].id+"</option>";
                        $("#districtOpt").html(data);
                    }
                }
            });
        }
        else if (val == "none") {
            $("#districtOpt").html("<option value='usa1'>-- select one -- </option>");
        }
    });
});
