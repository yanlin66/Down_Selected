function downcheck(data,domvalue,domtext,type) {
    //data --- 数据源
    //domvalue --- 输入框存储的值
    //domtext  ---- 输入框显示容器
    //yesDate ---- 绑定不同的按钮名
    //type  ----- 选项框的类型 1为多选  不输入为单选

    var yesName=(domvalue).slice(1,-1)+'_1';
    var str='';
    var body=$("body");
    str='<div class="mask_warp">\n' +
        '    <div class="mask-content">\n' +
        '        <div class="mask-btn '+yesName+'">确定</div>\n' +
        '        <div class="mask-btn-cancel">取消</div>\n' +
        '        <div class="mask-append">\n';
    if(type == 1){
        data.map(function (item){
            str +='<label><span>'+item.label+'</span><input type="checkbox" class="aui-checkbox" name="type_c" value="'+item.value+'"></label>'
        });
    }else{
        data.map(function (item){
            str +='<label><span>'+item.label+'</span><input type="radio" class="aui-radio" name="type_c" value="'+item.value+'"></label>'
        });
    }

    str +=   '</div>\n' +
        '    </div>\n' +
        '    <div class="mask-bg"></div>\n' +
        '</div>';
    $(domtext).on("click",function(){
        $("body").append(str);
    });


    //弹窗
    body.on("click",".mask-bg",function () {
        console.log('关闭选项');
        $(".mask_warp").fadeOut(300).remove();
    });

    var yesbtn= "."+yesName;

    body.on("click",yesbtn,function () {
        var conString='';
        var conString1='';
        for(var i=0;i<$(".mask-append>label").length;i++){
            if($(".mask-append>label").eq(i).children("input").prop("checked")){
                conString += ''+$(".mask-append>label").eq(i).children("input").val()+',';
                conString1 += ''+$(".mask-append>label").eq(i).children("span").html()+',';
            }
        }
        conString=conString.slice(0,-1);
        conString1=conString1.slice(0,-1);
        $(domvalue).val(conString);
        $(domtext).val(conString1);
        $(".mask_warp").remove();
    });
    body.on("click",".mask-btn-cancel",function () {
        console.log('取消选项');
        $(".mask_warp").remove();
    });

}

