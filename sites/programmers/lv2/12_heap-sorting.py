import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # 리스트를 최소 힙으로 변환합니다.
    mix_count = 0

    while len(scoville) > 1 and scoville[0] < K:
        first = heapq.heappop(scoville)  # 가장 작은 값
        second = heapq.heappop(scoville)  # 두 번째로 작은 값

        new_scoville = first + second * 2
        heapq.heappush(scoville, new_scoville)  # 새로운 값 삽입

        mix_count += 1

    if scoville[0] < K:
        return -1

    return mix_count

print(solution([1, 2, 3, 9, 10, 12], 7))  # 2
