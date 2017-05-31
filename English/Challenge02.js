let requests = [
    { requestId: 'poiax', startedAt: 1489744808, ttl: 8 },
    { requestId: 'kdfhd', startedAt: 1489744803, ttl: 3 },
    { requestId: 'uqwyet', startedAt: 1489744806, ttl: 12 },
    { requestId: 'qewaz', startedAt: 1489744810, ttl: 1 },
]

function calculateCumulativeTtl(requests) {
    var cur = requests[0].startedAt;
    var ttl = requests[0].ttl;
    var min = cur;
    var max = cur + ttl;
    for (i = 1 ; i < requests.length; i++){
        cur = requests[i].startedAt;
        ttl = requests[i].ttl;
        if (cur < min) min = cur;
        if (max < cur + ttl) max = cur + ttl;
    }
    return max - min;
}

let cumulativeTtl = calculateCumulativeTtl(requests);
console.log(cumulativeTtl);
